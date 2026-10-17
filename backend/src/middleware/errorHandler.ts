import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { env } from '../config/env';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void {
  console.error('[UnhandledError]', {
    method: req.method,
    path: req.path,
    message: err.message,
    stack: env.NODE_ENV === 'development' ? err.stack : undefined,
  });

  if (err instanceof ZodError) {
    const formattedErrors = err.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));

    res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: formattedErrors,
    });
    return;
  }

  // Generic internal server error
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'An internal server error occurred. Please try again later.',
  });
}
