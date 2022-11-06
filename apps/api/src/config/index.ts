import * as dotenv from 'dotenv';
dotenv.config();

function getConfig(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Env variable ${key} is required`);
  return value;
}

const config = {
  apiKey: getConfig('API_KEY'),
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  db: {
    url: getConfig('DATABASE_URL'),
    user: getConfig('DB_USER'),
    password: getConfig('DB_PASSWORD'),
    host: getConfig('DB_HOST'),
    name: getConfig('DB_NAME'),
    port: getConfig('DB_PORT'),
  },
};

export const isProd = () => config.env === 'production';

export const getDbURL = () => {
  const { host, name, port, url } = config.db;

  // in production, the url is directly provided
  if (isProd()) return url;

  const user = encodeURIComponent(config.db.user);
  const password = encodeURIComponent(config.db.password);
  return `postgres://${user}:${password}@${host}:${port}/${name}`;
};

export default config;
