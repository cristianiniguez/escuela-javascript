import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'admin123',
  database: 'escuela-javascript',
});

export default pool;
