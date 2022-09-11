import express from 'express';
import cors from 'cors';
import apiRouter from './routes';
import { boomErrorHandler, errorHandler, logErrors } from './middlewares/error.handler';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

apiRouter(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
