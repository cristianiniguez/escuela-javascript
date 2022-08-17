import type { Express } from 'express';
import productsRouter from './products';

function apiRouter(app: Express) {
  app.use('/products', productsRouter);
}

export default apiRouter;
