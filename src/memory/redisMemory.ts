import Memory from "../memory";
import { createClient } from "redis";

type RedisUrlString = `redis${"s" | ""}://${
  | `${string}:${string}@`
  | ""}${string}${`:${number}` | ""}${`/${number}` | ""}`;

type RedisMemorySettings = {
  uri: RedisUrlString;
};

class RedisMemory extends Memory {
  private client: any;
  private settings: RedisMemorySettings;

  constructor(redisMemorySettings: RedisMemorySettings) {
    super();
    this.settings = redisMemorySettings;
  }

  public async connect() {
    this.client = await createClient()
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect();
  }

  public async get(key: string): Promise<string> {
    const value = await this.client.get(key);
    return value;
  }

  public async set(key: string, value: any): Promise<void> {
    await this.client.set(key, value);
  }
}
