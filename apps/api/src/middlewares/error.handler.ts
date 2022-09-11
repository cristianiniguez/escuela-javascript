import { ErrorRequestHandler } from 'express';

export const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  next(err);
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};
