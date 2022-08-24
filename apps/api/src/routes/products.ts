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
  res.json({
    message: 'created',
    data: body,
  });
});

productsRouter.patch('/:id', (req, res) => {
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id: req.params.id,
  });
});

productsRouter.delete('/:id', (req, res) => {
  res.json({
    message: 'updated',
    id: req.params.id,
  });
});

export default productsRouter;
