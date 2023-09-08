import { Inject, Injectable } from '@nestjs/common';
import { Donation } from './entities/donation.entity';
import { returnSuccess, returnError } from '../../common/util/response.handler';
import { UsersService } from '../users/users.service';
import { GrpcService } from '../grpc/grpc.service';
import { MyService } from "../../common/helper/redis/redis.service";
import { User } from '../users/entities/user.entity';
import { sendEmail } from 'src/common/util/Utility';

@Injectable()
export class DonationService {

  constructor(
    @Inject("DONATION") private donation: typeof Donation,
    @Inject("USER") private user: typeof User,
    private readonly usersService: UsersService,
    private readonly grpcService: GrpcService,
    private readonly cacheService: MyService,
  ) { }

  public onModuleInit() {
    this.donation.belongsTo(this.user, { foreignKey: 'userId' });
  }

  async totalDonate() {
    try{
      const donation = await this.donation.sum('amount',{ where: {status: 'SUCCESS' }})
      return returnSuccess(false, 'Donate get successfully', donation);
    }catch(error){
      return returnError(true, error.message);
    }
  }

  async donate(data: any) {
    try {
      /*if(data?.userId){
        const userCollective = await this.usersService.getUserAllCollective(data?.userId)
        console.log("userCollective---", userCollective)
        if(userCollective?.error){
          throw userCollective;
        }
      } */
      const razorpay = await this.grpcService.createRazorpayOrder({
        "amount": data?.amount  * 100,
        "currency": "INR",
        "receipt": data?.userId ?? ''
      });
      console.log("razorpay---", razorpay)
      if (razorpay?.error) {
        throw returnError(true, razorpay?.message);
      }

      const orderId = razorpay?.data?.orderId;
      const donationResp = await this.donation.create(data);
      if(!donationResp){
        throw returnError(true, 'Something went wrong');
      }
      await this.cacheService.set(orderId, 'donation', 600);
      return returnSuccess(false, 'Donate order create successfully', razorpay?.data);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }


 
  
}
