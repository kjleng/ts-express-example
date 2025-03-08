import { Pool } from "pg";
import { config } from "../config";

const pool = new Pool({
  host: config.postgresHost,
  user: config.postgresUser,
  password: config.postgresPassword,
  database: config.postgresDB,
  port: Number(config.postgresPort),
  idleTimeoutMillis: 30000
});

export default pool;
