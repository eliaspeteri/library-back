import { NextFunction, Request, Response } from 'express';
import logger from './logger';

const requestLogger = (
  request: Request,
  _response: Response,
  next: NextFunction
): void => {
  logger.info('Method: ', request.method);
  logger.info('Path: ', request.path);
  logger.info('Body: ', request.body);
  logger.info('Params: ', request.params);
  logger.info('---');
  next();
};

export { requestLogger };
