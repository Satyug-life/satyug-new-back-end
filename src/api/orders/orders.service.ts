import { Inject, Injectable } from '@nestjs/common';
import { returnSuccess, returnError } from '../../common/util/response.handler';
import { UsersService } from '../users/users.service';
import { ProductService } from '../admin/product/product.service';
import { Order } from './entities/order.entity';
import { GrpcService } from '../grpc/grpc.service';
import { MyService } from "../../common/helper/redis/redis.service";
import { Product } from '../admin/product/entities/product.entity';
import { User } from '../users/entities/user.entity';
import { sendEmail } from '../../common/util/Utility';
import { Op } from 'sequelize';

@Injectable()
export class OrdersService {

  constructor(
    @Inject("ORDER") private order: typeof Order,
    @Inject("PRODUCT") private product: typeof Product,
    @Inject("USER") private user: typeof User,
    private readonly usersService: UsersService,
    private readonly productService: ProductService,
    private readonly grpcService: GrpcService,
    private readonly cacheService: MyService,
  ) { }

  public onModuleInit() {
    this.order.belongsTo(this.product, { foreignKey: 'productId' });
    this.order.belongsTo(this.user, { foreignKey: 'userId' });
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

  

}
