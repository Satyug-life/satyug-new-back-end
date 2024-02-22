import { Inject, Injectable } from '@nestjs/common';
import { returnSuccess, returnError } from '../../common/util/response.handler';
import { UsersService } from '../users/users.service';
import { ProductService } from '../admin/product/product.service';
import { Order } from './entities/order.entity';
import { GrpcService } from '../grpc/grpc.service';
import { MyService } from "../../common/helper/redis/redis.service";
import { Product } from '../admin/product/entities/product.entity';
import { User } from '../users/entities/user.entity';
import { generateRandomString32, sendEmail } from '../../common/util/Utility';
import Thali from "./entities/thali.entity";
import { Op } from 'sequelize';
import { Donation } from "../donation/entities/donation.entity";
import { STATUS_TYPE } from 'src/constants/enums';
import * as moment from "moment"

@Injectable()
export class OrdersService {

  constructor(
    @Inject("ORDER") private order: typeof Order,
    @Inject("PRODUCT") private product: typeof Product,
    @Inject("DONATION") private donation: typeof Donation,
    @Inject("USER") private user: typeof User,
    @Inject("THALI") private thalirepo: typeof Thali,
    private readonly usersService: UsersService,
    private readonly productService: ProductService,
    private readonly grpcService: GrpcService,
    private readonly cacheService: MyService,
  ) { }

  public onModuleInit() {
    this.order.belongsTo(this.product, { foreignKey: 'productId' });
    this.order.belongsTo(this.user, { foreignKey: 'userId' });
    this.thalirepo.belongsTo(this.user, { foreignKey: "userId" });
  }


  async createOrder(data) {
    try {
      // VALIDATE PRODUCT
      const product = await this.productService.getProductByKey({ id: data?.productId, isActive: true });
      if (product?.error) {
        throw returnError(true, product?.message);
      }

      const razorpay = await this.grpcService.createRazorpayOrder({
        "amount": data?.qty * Number(product?.data[0]['price']) * 100,
        "currency": "INR",
        "receipt": data?.userId
      });
      console.log("razorpay---", razorpay)
      if (razorpay?.error) {
        throw returnError(true, razorpay?.message);
      }
      // CHECK USER COLLECTIVE EXIST OR NOT
      const userCollective = await this.usersService.getUserAllCollective(data?.userId)
      console.log("userCollective------------", userCollective)
      if (userCollective?.error) {
        throw returnError(true, 'Please play game first');
      }

      if (Number(product?.data[0]['quantity']) <= 0 || Number(product?.data[0]['quantity']) < data?.qty) {
        throw returnError(true, 'Quantity not available.');
      }

      const orderId = razorpay?.data?.orderId;
      data.razorpayOrderId = razorpay?.data?.orderId;
      data.amount = data?.qty * Number(product?.data[0]['price']);
      data.orderDate = new Date();
      data.fullName = data?.firstName + ' ' + data?.lastName
      const orderResp = await this.order.create(data);
      if (!orderResp) {
        throw returnError(true, 'Something went wrong');
      }

      await this.cacheService.set(orderId, 'order', 600);
      return returnSuccess(false, 'Order create successfully', razorpay?.data);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async sendOrderEmail(productData, orderId) {
    try {
      const orderData = await this.order.findOne({ where: { razorpayOrderId: orderId }, raw: true })
      const shippingAddress = orderData?.addressDetail['shipping'];
      let collectiveEmailData = {
        img: productData?.image,
        size: productData?.size,
        qty: orderData?.qty,
        price: +productData?.price,
        address: `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.state} - ${shippingAddress.pincode} `,
        type: productData?.type
      }
      sendEmail(orderData?.email, collectiveEmailData, 'order')
    } catch (error) {
      return returnError(true, error.message);
    }
  }

  async createThali(data) {
    try {
      const id = data?.userId;

      let response: any = await this.user.findOne({
        attributes: ["userId", "name", "email", "phoneNumber"],
        where: { userId: id },
        raw: true,
      });

      if (!response) {
        throw returnError(true, "Invalid User");
      }
      response = { ...response, type: 'Thali', description: data?.description }

      const razorpay = await this.grpcService.createRazorpayOrder({
        amount: Number(data?.price) * 100,
        currency: "INR",
        receipt: data?.userId,
        data: response
      });
      if (razorpay?.error) {
        throw returnError(true, razorpay?.message);
      }

      const orderId = razorpay?.data?.orderId;
      const customerId = razorpay?.data?.customerId;
      const itemId = razorpay?.data?.itemId;
      data.razorpayOrderId = razorpay?.data?.orderId;
      data.customerId = customerId;
      data.itemId = itemId;
      const { userId } = response;
      if (Number(data?.price) == 2100) {
        data["thaliType"] = "PHYSICAL"
      } else {
        data["thaliType"] = "VIRTUAL"
        data["ThaliStatus"] = "Done"
        data["metaData"] = null
      }


      let newUser = await this.create({
        ...data
      });

      await this.cacheService.set(orderId, "orderThali", 600);
      return returnSuccess(false, "Thali order successfully", razorpay?.data);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async getThaliList(data: any) {
    try {
      let { limit, offset, search } = data

      if (limit > -1) {
        if (offset < 1) {
          offset = 1;
        }
        offset = (offset - 1) * limit
      }
      const condition = {}
      if (search) {
        Object.assign(condition, {
          thaliType: search
        })
      }
      const thaliList = await this.thalirepo.findAndCountAll(
        {
          include: [
            {
              model: this.user,
              attributes: ["name"]
            }
          ],
          where: condition,
          limit: Number(limit),
          offset: Number(offset),
          order: [['updatedAt', 'DESC']],
        }
      );
      if (!thaliList) {
        throw returnError(true, "Something went wrong.");
      }
      return returnSuccess(false, "Thali list get successfully", thaliList);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async updateThalistatus(id, data) {
    try {
      const thaliInfo = await this.thalirepo.findOne(
        {
          attributes: ["metaData"],

          where: { id },
          raw: true
        })
      const thaliStatus = await this.thalirepo.update(
        {
          ThaliStatus: data?.status
        },
        { where: { id, thaliType: 'PHYSICAL' } }
      );
      if (thaliStatus[0] === 0) {
        throw returnError(true, "Virtual thali status can't be updated.");
      }
      if (data?.status === "Pooja Initiated") {
        sendEmail(thaliInfo.metaData["email"], { logo: `${process.env.CLOUD_LINK}/artivive_p2/Thali_2.png` }, 'poojaInitiated', data?.lang)

      } else if (data?.status === 'Prasad out for delivery') {
        const emailData = { logo: `${process.env.CLOUD_LINK}/artivive_p2/Thali_2.png`, email: thaliInfo?.metaData["email"], name: thaliInfo?.metaData["name"], phone: thaliInfo?.metaData["phone"], address: thaliInfo?.metaData["address"] }
        sendEmail(thaliInfo.metaData["email"], emailData, 'prasadOutForDelivery', data?.lang)
      } else {
        sendEmail(thaliInfo.metaData["email"], { logo: `${process.env.CLOUD_LINK}/artivive_p2/Thali_2.png` }, 'prasadDelivered', data?.lang)
      }

      return returnSuccess(false, "Thali status updatd successfully.", null);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

  async WebHookPayment(data: any): Promise<any> {
    try {
      let model;
      let condition = { razorpayOrderId: data?.orderId }
      let attributes = ["status"]
      switch (STATUS_TYPE[data?.type]) {
        case "Donation":
          // const userEmail = await this.user.findOne(
          //   {
          //     attributes: ["email"],
          //     where: { userId: data?.userId },
          //     raw: true
          //   })
          // condition = { userId: userEmail?.email }
          model = this.donation
          break;
        case "Thali":
          model = this.thalirepo
          break;
        default:
          model = this.order
          attributes = ["paymentStatus"]
          break;
      }

      const status = await model.findAll({
        attributes,
        where: condition,
        order: [['createdAt', 'DESC']],
        limit: 1,

      })
      let statusRes
      if (STATUS_TYPE[data?.type] === "Order") {
        statusRes = status[0].paymentStatus
      } else {
        statusRes = status[0].status
      }
      return returnSuccess(false, 'Payment status get sucessfully.', { type: STATUS_TYPE[data?.type], status: statusRes });
    } catch (error) {
      return returnError(true, error.message);
    }
  }

  async freeThali(data) {
    try {
      const id = data?.userId;

      // const thaliInfo: any = await this.thalirepo.findOne(
      //   {
      //     attributes: ['customerId', 'itemId', 'createdAt', 'price', 'thaliType', 'metaData'],
      //     include: [
      //       {
      //         model: this.user,
      //         attributes: ["email"]
      //       }
      //     ],
      //     where: { razorpayOrderId: orderId },
      //     raw: true
      //   })

      let response: any = await this.user.findOne({
        attributes: ["userId", "name", "email", "phoneNumber"],
        where: { userId: id },
        raw: true,
      });

      if (!response) {
        throw returnError(true, "Invalid User");
      }
      response = { ...response, type: 'Thali', description: data?.description }

      // const razorpay = await this.grpcService.createRazorpayOrder({
      //   amount: Number(data?.price) * 100,
      //   currency: "INR",
      //   receipt: data?.userId,
      //   data: response
      // });
      // if (razorpay?.error) {
      //   throw returnError(true, razorpay?.message);
      // }

      // const orderId = null;
      // const customerId = null;
      // const itemId = null;
      // data.razorpayOrderId = razorpay?.data?.orderId;
      // data.customerId = customerId;
      // data.itemId = itemId;
      const { userId } = response;
      // if (Number(data?.price) == 0) {

      // }
      // CREATE INVOICE
      let invoiceURL;
      const customerId = await generateRandomString32(14);
      const invoiceData = {
        invoiceNo: customerId,
        amount: 0,
        date: moment().format("dddd Do MMMM, YYYY"),
        type: 'Thali',
        description: 'Thanks for purchasing puja thali.',
        name: `${customerId}.pdf`,
        qty: 1
      }
      invoiceURL = await this.usersService.generatePdf1(invoiceData)
      const invoice = `${invoiceURL}`

      data["thaliType"] = "VIRTUAL"
      data["ThaliStatus"] = "Done"
      data["metaData"] = null
      data["price"] = 0
      data["status"] = "SUCCESS"
      data["invoice"] = invoice
      data["customerId"] = `cust_${customerId}`
      data["description"] = "Thali with 1 diya + phool + Mishri prasad"
      let newUser = await this.create({
        ...data
      });
      let emailBody = { invoice: invoiceURL, logo: `${process.env.CLOUD_LINK}/artivive_p2/Thali_Simple.png` }
      sendEmail(response?.email, emailBody, 'virtualThali', data?.lang)
      return returnSuccess(false, "Thali order successfully", null);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

}
