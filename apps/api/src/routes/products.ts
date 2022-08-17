import { Router } from 'express';
import { faker } from '@faker-js/faker';

const router = Router();

router.get('/', (req, res) => {
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

router.get('/filter', (req, res) => {
  res.send('Filtering products');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 1000,
  });
});

export default router;
