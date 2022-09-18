import * as dotenv from 'dotenv';
dotenv.config();

function getConfig(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Env variable ${key} is required`);
  return value;
}

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  db: {
    user: getConfig('DB_USER'),
    password: getConfig('DB_PASSWORD'),
    host: getConfig('DB_HOST'),
    name: getConfig('DB_NAME'),
    port: getConfig('DB_PORT'),
  },
};

export default config;
