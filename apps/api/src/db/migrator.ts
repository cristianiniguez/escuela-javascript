import { SequelizeStorage, Umzug } from 'umzug';
import path from 'path';
import sequelize from '../libs/sequelize';

export const umzug = new Umzug({
  context: sequelize.getQueryInterface(),
  create: { folder: path.resolve(__dirname, 'migrations') },
  logger: console,
  migrations: { glob: path.resolve(__dirname, 'migrations', '*.ts') },
  storage: new SequelizeStorage({ modelName: 'migrations', sequelize }),
});

if (require.main === module) umzug.runAsCLI();
