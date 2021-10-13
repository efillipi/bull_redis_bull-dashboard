/* eslint-disable no-console */
import 'dotenv/config';
import express from 'express';

const app = express();

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(` 💻 Started: ${PORT}`);
});
