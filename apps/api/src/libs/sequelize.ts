import { Options, Sequelize } from 'sequelize';
import { getDbURL, isProd } from '../config';
import setupModels from '../db/models';

const options: Options = { dialect: 'postgres', logging: !isProd() };

if (isProd()) options.dialectOptions = { ssl: { rejectUnauthorized: false } };

const sequelize = new Sequelize(getDbURL(), options);

export const setupDb = () => setupModels(sequelize);

export default sequelize;
