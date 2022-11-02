import { Sequelize } from 'sequelize';
import config from '../config';
import setupModels from '../db/models';

const { host, name, port } = config.db;
const user = encodeURIComponent(config.db.user);
const password = encodeURIComponent(config.db.password);
const uri = `postgres://${user}:${password}@${host}:${port}/${name}`;

const sequelize = new Sequelize(uri, { dialect: 'postgres', logging: true });

export const setupDb = () => setupModels(sequelize);

export default sequelize;
