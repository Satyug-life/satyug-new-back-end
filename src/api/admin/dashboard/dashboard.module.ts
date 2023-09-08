import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { UsersModule } from '../../users/users.module';
import { DonationModule } from '../../donation/donation.module';
import { OrdersModule } from '../../orders/orders.module';
import { CollectableModule } from '../collectable/collectable.module';

@Module({
  imports: [UsersModule, DonationModule, OrdersModule, CollectableModule],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
