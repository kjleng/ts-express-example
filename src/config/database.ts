import { Pool } from "pg";

const pool = new Pool({
  // host: env.POSTGRES_HOST,
  // user: env.POSTGRES_USER,
  // password: env.POSTGRES_PASSWORD,
  // database: env.POSTGRES_DB,
  // port: env.POSTGRES_PORT,
  host: "db", user: "postgres", password: "secret", port: 5432, database: "api_db",
  idleTimeoutMillis: 30000
});

export default pool;
