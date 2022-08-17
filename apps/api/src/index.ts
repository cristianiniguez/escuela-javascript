import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/products', (req, res) => {
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

app.get('/products/filter', (req, res) => {
  res.send('Filtering products');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 1000,
  });
});

app.get('/categories/:id/products/:productId', (req, res) => {
  const { id, productId } = req.params;
  res.json({
    id,
    productId,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send('There are no query params');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
