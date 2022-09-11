import { Express, Router } from 'express';

import usersRouter from './users';
import productsRouter from './products';
import categoriesRouter from './categories';

function apiRouter(app: Express) {
  const router = Router();
  router.use('/users', usersRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);

  app.use('/api/v1', router);
}

export default apiRouter;
