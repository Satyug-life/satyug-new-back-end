import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { UsersModule } from '../users/users.module';
import { OrderProviders } from './entities/order.providers';
import { orderValidation, updateOrderValidation, paginationValidation } from '../../common/validations/validation';
import { ProductModule } from '../admin/product/product.module';
import { GrpcModule } from '../grpc/grpc.module';
import { RedisModules } from '../../common/helper/redis/redis.module';
import { ProductProviders } from '../admin/product/entities/product.providers';
import { UserProviders } from '../users/entities/user.providers';

@Module({
  imports: [UsersModule, ProductModule, GrpcModule, RedisModules],
  controllers: [OrdersController],
  providers: [OrdersService, ...OrderProviders, ...ProductProviders, ...UserProviders],
  exports: [OrdersService]
})
export class OrdersModule implements NestModule {
  configure(order: MiddlewareConsumer) {
    order
      .apply(orderValidation)
      .forRoutes({ path: "/orders", method: RequestMethod.POST });
    order
      .apply(updateOrderValidation)
      .forRoutes({ path: "/orders/:orderId", method: RequestMethod.PATCH });  
    order
      .apply(paginationValidation)
      .forRoutes({ path: "/orders/:limit/:offset", method: RequestMethod.GET });    
  }
}

