import { Router } from 'express';
import passport from 'passport';
import ProductsService, { QueryProductsDTO } from '../services/products.service';
import validationHandler from '../middlewares/validation.handler';
import {
  createProductSchema,
  getProductSchema,
  queryProductsSchema,
  updateProductSchema,
} from '../schemas/product.schema';

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
      const { id } = req.params;
      const product = await productsService.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

productsRouter.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validationHandler(createProductSchema),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await productsService.create(body);
      res.json(newProduct);
    } catch (error) {
      next(error);
    }
  },
);

productsRouter.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validationHandler(getProductSchema, 'params'),
  validationHandler(updateProductSchema),
  async (req, res, next) => {
    const {
      body,
      params: { id },
    } = req;

    try {
      const updatedProduct = await productsService.update(id, body);
      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  },
);

productsRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validationHandler(getProductSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await productsService.delete(id);
    res.json(deletedProduct);
  },
);

export default productsRouter;
