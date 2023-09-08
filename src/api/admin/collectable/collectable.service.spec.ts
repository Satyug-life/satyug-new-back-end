import { Test, TestingModule } from '@nestjs/testing';
import { CollectableService } from './collectable.service';

describe('CollectableService', () => {
  let service: CollectableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectableService],
    }).compile();

    service = module.get<CollectableService>(CollectableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
