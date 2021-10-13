/* eslint-disable no-console */
import 'dotenv/config';
import express from 'express';
import UserController from './controllers/UserController';

const app = express();

app.use(express.json());

app.post('/users', UserController.create);

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(` 💻 Started: ${PORT}`);
});
