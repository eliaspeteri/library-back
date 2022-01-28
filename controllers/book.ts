/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router, Request, Response } from 'express';

/* Services */
import BookService from '../services/books';

/* Types */
import { Book } from '../types';

/* Utils */
import logger from '../utils/logger';

const controller: Router = Router();

controller.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    res.json(await BookService.getAll());
  } catch (error) {
    res.status(400).send({ error: 'Unable to fetch all books.' });
    logger.error((error as any).message);
  }
});

controller.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const book: Book | null = await BookService.findById(req.params.id);
  book ? res.json(book) : res.sendStatus(404);

  logger.info(`fetched ${req.params.id}`);
});

controller.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const response: string = await BookService.saveOne({
      ...req.body
    });

    res.json({ message: response });
  } catch (error) {
    res.status(400).send({ error: 'Unable to post a new book.' });
    logger.error((error as any).message);
  }
});

controller.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const response: string = await BookService.updateOne(req.params.id, {
      ...req.body
    });

    res.json({ message: response });
  } catch (error) {
    res.status(400).send({ error: 'Unable to update book.' });
    logger.error((error as any).message);
  }
});

controller.delete(
  '/:id',
  async (req: Request, res: Response): Promise<void> => {
    try {
      BookService.removeOne(req.params.id);
      res.status(204);
      logger.info(`removed ${req.params.id}`);
    } catch (error) {
      res.json({ error: 'Book not found.' });
      logger.error((error as any).message);
    }
  }
);

export default controller;
