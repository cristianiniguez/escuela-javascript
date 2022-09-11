import { Router } from 'express';
import ProductsService from '../services/products';

const productsRouter = Router();
const productsService = new ProductsService();

productsRouter.get('/', async (req, res) => {
  const products = await productsService.find();
  res.json(products);
});

productsRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

productsRouter.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await productsService.create(body);
  res.json(newProduct);
});

productsRouter.patch('/:id', async (req, res, next) => {
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
});

productsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await productsService.delete(id);
  res.json(deletedProduct);
});

export default productsRouter;
