import * as dotenv from 'dotenv';
dotenv.config();

function getConfig(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Env variable ${key} is required`);
  return value;
}

type DbConfig =
  | { url: string }
  | {
      user: string;
      password: string;
      host: string;
      name: string;
      port: string;
    };

function getDbConfig(): DbConfig {
  const dbUrl = process.env.DATABASE_URL;
  if (dbUrl) return { url: dbUrl };

  return {
    user: getConfig('DB_USER'),
    password: getConfig('DB_PASSWORD'),
    host: getConfig('DB_HOST'),
    name: getConfig('DB_NAME'),
    port: getConfig('DB_PORT'),
  };
}

const config = {
  apiKey: getConfig('API_KEY'),
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  db: getDbConfig(),
  jwtSecret: getConfig('JWT_SECRET'),
};

export const isProd = () => config.env === 'production';

export const getDbURL = () => {
  if ('url' in config.db) return config.db.url;
  const { host, name, port } = config.db;
  const user = encodeURIComponent(config.db.user);
  const password = encodeURIComponent(config.db.password);
  return `postgres://${user}:${password}@${host}:${port}/${name}`;
};

export default config;
