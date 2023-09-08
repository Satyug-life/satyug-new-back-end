import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";

// import { NftsService } from "../nfts/nfts.service";
import { GrpcService } from './grpc.service';
@Controller("")
export class GrpcController {
  constructor(
    private readonly grpcService: GrpcService
    // private readonly nftService: NftsService,
  ) { }

  //Admin Grpc's
  /*
   * @description create Order
   * @param {}
   * @returns {status, error, message, data}
   */
  // @GrpcMethod(ORDER_SERVICE_NAME, "createNft")
  // async createNft(payload: any): Promise<any> {
  //   const resp = await this.nftService.createNft(payload);
  //   return resp;
  // }


}
