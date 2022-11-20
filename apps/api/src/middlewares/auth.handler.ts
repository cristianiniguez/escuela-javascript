import { RequestHandler } from 'express';
import boom from '@hapi/boom';
import config from '../config';
import { JWTPayload } from '../utils';
import { ROLE } from '../db/models/user.model';

export const authHandler: RequestHandler = (req, res, next) => {
  const apiKey = req.headers.api;
  apiKey === config.apiKey ? next() : next(boom.unauthorized());
};

export const adminCheckHandler: RequestHandler = (req, res, next) => {
  const user = req.user as JWTPayload;
  if (user.role === 'admin') {
    next();
  } else {
    next(boom.unauthorized());
  }
};

export const roleCheckHandler =
  (...roles: ROLE[]): RequestHandler =>
  (req, res, next) => {
    const user = req.user as JWTPayload;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
