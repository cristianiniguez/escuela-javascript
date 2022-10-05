import config from '../config';

const { host, name, port } = config.db;
const user = encodeURIComponent(config.db.user);
const password = encodeURIComponent(config.db.password);
const uri = `postgres://${user}:${password}@${host}:${port}/${name}`;

export default {
  development: { dialect: 'postgres', uri },
  production: { dialect: 'postgres', uri },
};
