import { RequestHandler } from 'express';
import boom from '@hapi/boom';
import config from '../config';

const authHandler: RequestHandler = (req, res, next) => {
  const apiKey = req.headers.api;
  apiKey === config.apiKey ? next() : next(boom.unauthorized());
};

export default authHandler;
