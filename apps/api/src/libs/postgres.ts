import { Pool } from 'pg';
import config from '../config';

const { host, name, port } = config.db;
const user = encodeURIComponent(config.db.user);
const password = encodeURIComponent(config.db.password);
const uri = `postgres://${user}:${password}@${host}:${port}/${name}`;
const pool = new Pool({ connectionString: uri });

export default pool;
