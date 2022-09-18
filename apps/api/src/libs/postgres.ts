import { Client } from 'pg';

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'admin123',
    database: 'escuela-javascript',
  });

  await client.connect();
  return client;
}

export default getConnection;
