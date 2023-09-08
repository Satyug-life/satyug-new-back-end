import { Collectable } from './collectable.entity';

export const CollectiveProviders = [
    {
        provide: "COLLECTABLE",
        useValue: Collectable,
      },
]