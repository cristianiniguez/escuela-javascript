import express from 'express';
import apiRouter from './routes';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

apiRouter(app);

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
