import { Sequelize } from 'sequelize-typescript';
import {
  SEQUELIZE,
  DEVELOPMENT,
  STAGE,
  PRODUCTION,
} from '../../constants/index';
import { databaseConfig } from './database.config';
import { Collectable } from '../../api/admin/collectable/entities/collectable.entity';
import { Product } from '../../api/admin/product/entities/product.entity';
import { User } from '../../api/users/entities/user.entity';
import { Auth } from '../../api/auth/entities/auth.entity';
import { Quiz } from '../../api/admin/quiz/entities/quiz.entity';
import { UserCollectible } from '../../api/users/entities/userCollectible.entity';
import { KarmaPoints } from '../../api/users/entities/karmaPoints.entity';
import { LeaderPoints } from '../../api/users/entities/leaderPoints.entity';
import { Donation } from '../../api/donation/entities/donation.entity';
import { Order } from '../../api/orders/entities/order.entity';
import { ContactUs } from '../../api/contact-us/entities/contact-us.entity';
export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.dev;
          break;
        case STAGE:
          config = databaseConfig.stage;
          break;
        case PRODUCTION:
          config = databaseConfig.prod;
          break;
        default:
          config = databaseConfig.dev;
      }
      const sequelize = new Sequelize(config);
      if (process.env.NODE_ENV != 'prod') {
        sequelize.addModels([
          Collectable,
          Product,
          User,
          Auth,
          Quiz,
          UserCollectible,
          KarmaPoints,
          LeaderPoints,
          Donation,
          Order,
          ContactUs
        ]);
        // await sequelize.sync({ alter: true });
      }
      return sequelize;
    },
  },
];
