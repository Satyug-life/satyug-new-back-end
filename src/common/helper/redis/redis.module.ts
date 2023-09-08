import { Module } from "@nestjs/common";
import { MyService } from "./redis.service";
import { RedisModule } from "@liaoliaots/nestjs-redis";
import { ConfigService } from "@nestjs/config";
import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.REDIS_URL, "---------REDIS_URL");
@Module({
  imports: [
    RedisModule.forRootAsync(
      {
        useFactory: () => {
          return {
            config: {
              url: process.env.REDIS_URL,
            },
          };
        },
      },
      true
    ),
  ],
  providers: [MyService],
  exports: [MyService],
})
export class RedisModules {}
