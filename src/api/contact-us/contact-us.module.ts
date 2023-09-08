import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { ContactUsController } from './contact-us.controller';
import { ContactUsProviders } from './entities/contactus.providers';
import { contactUsValidation, paginationValidation } from '../../common/validations/validation';

@Module({
  controllers: [ContactUsController],
  providers: [ContactUsService, ...ContactUsProviders]
})
export class ContactUsModule implements NestModule {
  configure(contact: MiddlewareConsumer) {
    contact
      .apply(contactUsValidation)
      .forRoutes({ path: "/contact-us", method: RequestMethod.POST });
    contact
      .apply(paginationValidation)
      .forRoutes({ path: "/contact-us/:limit/:offset", method: RequestMethod.GET });  
      
  }
}

