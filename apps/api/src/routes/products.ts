import { Router } from 'express';
import passport from 'passport';
import ProductsService, { QueryProductsDTO } from '../services/products.service';
import { roleCheckHandler } from '../middlewares/auth.handler';
import validationHandler from '../middlewares/validation.handler';
import {
  createProductSchema,
  getProductSchema,
  queryProductsSchema,
  updateProductSchema,
} from '../schemas/product.schema';
import { ROLE } from '../db/models/user.model';

const productsRouter = Router();
const productsService = new ProductsService();

productsRouter.get('/', validationHandler(queryProductsSchema, 'query'), async (req, res, next) => {
  const { limit, offset, price, min_price, max_price } = req.query;
  const query: QueryProductsDTO = {};
  if (limit) query.limit = +limit;
  if (offset) query.offset = +offset;
  if (price) query.price = +price;
  if (min_price) query.minPrice = +min_price;
  if (max_price) query.maxPrice = +max_price;

  try {
    const products = await productsService.find(query);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

productsRouter.get(
  '/:id',
  validationHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const product = await productsService.findOne(+req.params.id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

productsRouter.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(createProductSchema),
  async (req, res, next) => {
    try {
      const newProduct = await productsService.create(req.body);
      res.json(newProduct);
    } catch (error) {
      next(error);
    }
  },
);

productsRouter.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(getProductSchema, 'params'),
  validationHandler(updateProductSchema),
  async (req, res, next) => {
    try {
      const updatedProduct = await productsService.update(+req.params.id, req.body);
      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  },
);

productsRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  roleCheckHandler(ROLE.ADMIN),
  validationHandler(getProductSchema, 'params'),
  async (req, res) => {
    const deletedProduct = await productsService.delete(+req.params.id);
    res.json(deletedProduct);
  },
);

export default productsRouter;
