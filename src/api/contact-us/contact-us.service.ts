import { Inject, Injectable } from '@nestjs/common';
import { ContactUs } from './entities/contact-us.entity';
import { returnSuccess, returnError } from '../../common/util/response.handler';
import { sendEmail } from '../../common/util/Utility';

@Injectable()
export class ContactUsService {
  
  constructor(
    @Inject("CONTACT_US") private contactus: typeof ContactUs
  ) { }

  async contact(data){
    try{
      const contactus = await this.contactus.create(data);
      if(!contactus){
        throw returnError(true, 'Something went wrong.')
      }
      // SEND EMAIL 
      sendEmail(process.env.ADMIN_EMAIL,data,'contact')
      return returnSuccess(false, `We will contact you shortly.`, null);
    }catch(error){
      return returnError(true, error.message);
    }
  }

  async getAdminAllContact(limit=10, offset=1) {
    try {
      if (!Number(limit)) {
        throw returnError(true, 'limit must be a number');
      }
      if (limit > 100) {
        throw returnError(true, 'limit must be less than 100');
      }
      if (limit > -1) {
        if (offset < 1) {
          offset = 1;
        }
        offset = (offset - 1) * limit;
      }
    
      const orderData = await this.contactus.findAndCountAll({
        limit: Number(limit),
        offset: Number(offset),
        order: [['updatedAt', 'DESC']],
      });

      let message = 'Admin contact list found successfully';
      if (orderData.rows.length === 0) {
        message = 'Admin contact list not found';
      }
      return returnSuccess(false, message, orderData);
    } catch (error: any) {
      return returnError(true, error.message);
    }
  }

}
