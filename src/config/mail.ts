interface IMail {
  host: string;
  port: number;
  auth: {
    user: string;
    pass: string;
  };
}

export default {
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
} as IMail;
