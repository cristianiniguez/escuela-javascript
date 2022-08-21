import { Router } from 'express';
import { faker } from '@faker-js/faker';

const productsRouter = Router();

productsRouter.get('/', (req, res) => {
  const { limit = '10' } = req.query;

  if (typeof limit !== 'string' || isNaN(parseInt(limit))) return res.send('Limit invalid');

  const products = Array(parseInt(limit))
    .fill(null)
    .map(() => ({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    }));

  res.json(products);
});

productsRouter.get('/filter', (req, res) => {
  res.send('Filtering products');
});

productsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 1000,
  });
});

productsRouter.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Product created',
    data: body,
  });
});

export default productsRouter;
