import { Router } from 'express';
import ProductsService from '../services/products';

const productsRouter = Router();
const productsService = new ProductsService();

productsRouter.get('/', (req, res) => {
  const products = productsService.find();
  res.json(products);
});

productsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = productsService.findOne(id);
  res.json(product);
});

productsRouter.post('/', (req, res) => {
  const body = req.body;
  const newProduct = productsService.create(body);
  res.json(newProduct);
});

productsRouter.patch('/:id', (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const updatedProduct = productsService.update(id, body);
  res.json(updatedProduct);
});

productsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedProduct = productsService.delete(id);
  res.json(deletedProduct);
});

export default productsRouter;
