import { Inject, Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { ClientGrpc } from "@nestjs/microservices";
import { returnError, returnSuccess } from "../../common/util/response.handler";
import { RAZORPAY_SERVICE_NAME, RazorpayServiceClient } from "../../grpc-service/protobuffer/razorpay.pb";

@Injectable()
export class GrpcService {
  
  private orderSvc: RazorpayServiceClient;

  @Inject(RAZORPAY_SERVICE_NAME)
  private readonly client: ClientGrpc

  constructor() { }

  public onModuleInit() {
    this.orderSvc = this.client.getService<RazorpayServiceClient>(RAZORPAY_SERVICE_NAME);
  }

  async createRazorpayOrder(data){
    try {
      const user: any = await firstValueFrom(
        this.orderSvc.createOrder(data)
      );

      return user
    } catch (error) {
      return returnError(true, error.message);
    }
  }

  async getRazorpayOrderMethod(data){
    try {
      const user: any = await firstValueFrom(
        this.orderSvc.getPaymentType(data)
      );

      return user
    } catch (error) {
      return returnError(true, error.message);
    }
  }

}
