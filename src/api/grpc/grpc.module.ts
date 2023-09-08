import { Module, forwardRef } from "@nestjs/common";
import { GrpcService } from "./grpc.service";
import { GrpcController } from "./grpc.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { RAZORPAY_PACKAGE_NAME, RAZORPAY_SERVICE_NAME } from '../../grpc-service/protobuffer/razorpay.pb';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: RAZORPAY_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: process.env.RAZOR_PAY_GRPC_PORT,
          package: RAZORPAY_PACKAGE_NAME,
          protoPath: ["src/grpc-service/proto/razorpay.proto"],
          loader: { keepCase: true, arrays: true, objects: true },
        },
      },
    ]),
  ],
  providers: [GrpcService],
  controllers: [GrpcController],
  exports: [GrpcService]
})
export class GrpcModule { }
