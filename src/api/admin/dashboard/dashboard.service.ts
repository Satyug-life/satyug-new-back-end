import { Injectable } from '@nestjs/common';
import { returnError, returnSuccess } from "../../../common/util/response.handler";
import { UsersService } from '../../users/users.service';
import { OrdersService } from '../../orders/orders.service';
import { DonationService } from '../../donation/donation.service';
import { CollectableService } from '../collectable/collectable.service';

@Injectable()
export class DashboardService {
  
  constructor(
    
  ) { }

  async getDashboardCards() {
    try {
     
      return returnSuccess(false, 'Dashboard cards get successfully', {  });
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

}
