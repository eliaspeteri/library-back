/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application } from 'express';
import mongoose from 'mongoose';

/* Controllers */
import bookController from './controllers/book';

/* Utils */
import Config from './utils/config';
import logger from './utils/logger';
import { requestLogger } from './utils/middleware';

const app: Application = express();

mongoose
  .connect(Config.MONGODB_URI)
  .then((): void => {
    logger.info('Connected to MongoDB.');
  })
  .catch((err: any): void => {
    logger.error(
      "Failed to connect to MongoDB. Here's why: ",
      (err as any).message
    );
  });

// Serve static files from frontend
app.use(express.static('../client/build'));

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(requestLogger);
app.use('/api/books', bookController);

export default app;
