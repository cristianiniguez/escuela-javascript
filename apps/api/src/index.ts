import createApp from './app';
import { setupDb } from './libs/sequelize';
import config from './config';
import './auth';

const port = config.port;

setupDb();

createApp().then((app) => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
