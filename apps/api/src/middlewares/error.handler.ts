import { ErrorRequestHandler } from 'express';

export const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  next(err);
};

export const boomErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (!err.isBoom) next(err);
  const { output } = err;
  res.status(output.statusCode).json(output.payload);
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};
