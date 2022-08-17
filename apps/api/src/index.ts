import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 2',
      price: 1000,
    },
    {
      name: 'Product 1',
      price: 2000,
    },
  ]);
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

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
