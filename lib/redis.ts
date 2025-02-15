import { Redis } from "@upstash/redis";
import { isProd } from "./utils";

// NOTE: This singleton is not necessary, but it's good practice.
const redisSingleton = () => {
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });
};

declare const globalThis: {
  redisGlobal: ReturnType<typeof redisSingleton>;
} & typeof global;

const redis = globalThis.redisGlobal ?? redisSingleton();

if (!isProd()) globalThis.redisGlobal = redis;

export default redis;
