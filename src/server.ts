/* eslint-disable no-console */
import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';
import UserController from './controllers/UserController';
import Queue from './lib/Queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.post('/users', UserController.create);

app.use('/admin/queues', BullBoard.UI);

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(` 💻 Started: ${PORT}`);
});
