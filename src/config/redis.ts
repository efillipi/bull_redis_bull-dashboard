interface IRedis {
  host: string | undefined;
  port: number | undefined;
  password: string | undefined;
}

export default {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASS || undefined,
} as IRedis;
