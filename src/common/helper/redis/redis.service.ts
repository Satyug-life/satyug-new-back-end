import { RedisService } from "@liaoliaots/nestjs-redis";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MyService {
  clientInternal: any;
  constructor(private readonly redisService: RedisService) {}

  async setValue(key: string, field: string, value: string): Promise<void> {
    const client = this.redisService.getClient();
    await client.hset(key, field, value);
  }

  async getValue(key: string, field: string): Promise<string | null> {
    const client = this.redisService.getClient();
    const res = await client.hget(key, field);
    return res;
  }

  async set(key: string, value: any, ttl: number): Promise<void> {
    const client = this.redisService.getClient();
    await client.set(key, value, "EX", ttl);
  }

  async get(key: string): Promise<any> {
    // console.log({ key })
    const client = this.redisService.getClient();
    const value = await client.get(key);
    return value;
  }

  async getString(key: string, database: any = ""): Promise<any> {
    const client = this.redisService.getClient();
    if (database !== "") {
      client.select(database);
    }
    const value = await client.get(key);
    return value;
  }

  async delete(key: string): Promise<void> {
    const client = this.redisService.getClient();
    await client.del(key);
  }

  async setNoExpire(key: string, value: any): Promise<void> {
    const client = this.redisService.getClient();
    await client.set(key, value);
  }
}
