import express from 'express';
import cors from 'cors';
import apiRouter from './routes';
import useGraphQL from './graphql';
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
  ormErrorHandler,
} from './middlewares/error.handler';
import { authHandler } from './middlewares/auth.handler';
import './auth';

async function createApp() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.get('/check', authHandler, (req, res) => {
    res.send(true);
  });

  apiRouter(app);
  await useGraphQL(app);

  app.use(logErrors, ormErrorHandler, boomErrorHandler, errorHandler);

  return app;
}

export default createApp;
