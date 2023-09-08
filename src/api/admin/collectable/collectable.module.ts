import { Module } from '@nestjs/common';
import { CollectableService } from './collectable.service';
import { CollectableController } from './collectable.controller';
import { CollectiveProviders } from './entities/collective.providers';

@Module({
  controllers: [CollectableController],
  providers: [CollectableService, ...CollectiveProviders],
  exports: [CollectableService, ...CollectiveProviders]
})
export class CollectableModule {}
