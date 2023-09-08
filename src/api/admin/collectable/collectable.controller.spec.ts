import { Test, TestingModule } from '@nestjs/testing';
import { CollectableController } from './collectable.controller';
import { CollectableService } from './collectable.service';

describe('CollectableController', () => {
  let controller: CollectableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectableController],
      providers: [CollectableService],
    }).compile();

    controller = module.get<CollectableController>(CollectableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
