import { Express, Router } from 'express';

import usersRouter from './users';
import customersRouter from './customers';
import productsRouter from './products';
import categoriesRouter from './categories';
import ordersRouter from './orders';

function apiRouter(app: Express) {
  const router = Router();
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', ordersRouter);

  app.use('/api/v1', router);
}

export default apiRouter;
