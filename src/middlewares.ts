import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

import ErrorResponse from './interfaces/ErrorResponse';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Error, req: Request, res: Response<ErrorResponse>, next: NextFunction) {
  if(err instanceof ZodError){
    res.status(200);
    res.json({
  
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
   })
  }
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}
