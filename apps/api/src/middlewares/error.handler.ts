import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'sequelize';

export const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  next(err);
};

export const ormErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (!(err instanceof ValidationError)) return next(err);

  res.status(409).json({
    statusCode: 409,
    message: err.name,
    errors: err.errors,
  });
};

export const boomErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (!err.isBoom) return next(err);
  const { output } = err;
  res.status(output.statusCode).json(output.payload);
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};
