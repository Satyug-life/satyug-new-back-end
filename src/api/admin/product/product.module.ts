import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductProviders } from './entities/product.providers';
import { DatabaseModule } from '../../../common/database/database.module';
import { createProductValidation, updateProductValidation, paginationValidation } from '../../../common/validations/validation';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService, ...ProductProviders],
  exports:[ProductService]
})
export class ProductModule implements NestModule {
  configure(product: MiddlewareConsumer) {
    product
      .apply(createProductValidation)
      .forRoutes({ path: "product", method: RequestMethod.POST });
    product
      .apply(updateProductValidation)
      .forRoutes({ path: "product/:id", method: RequestMethod.PATCH });
    product
      .apply(paginationValidation)
      .forRoutes({ path: "product/:type/:limit/:offset", method: RequestMethod.GET });  
  }
}
