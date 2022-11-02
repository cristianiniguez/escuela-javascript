import express from 'express';
import cors from 'cors';
import apiRouter from './routes';
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
  ormErrorHandler,
} from './middlewares/error.handler';
import { setupDb } from './libs/sequelize';

setupDb();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

apiRouter(app);

app.use(logErrors, ormErrorHandler, boomErrorHandler, errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
