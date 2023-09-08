import { Product } from './product.entity';

export const ProductProviders = [
    {
        provide: "PRODUCT",
        useValue: Product,
      },
]