import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import boom from '@hapi/boom';

const validationHandler = (
  schema: Joi.ObjectSchema,
  property: keyof Request = 'body',
): RequestHandler => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) return next(boom.badRequest(error.message));
    next();
  };
};

export default validationHandler;
