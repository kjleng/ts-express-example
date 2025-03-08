import dotenv from 'dotenv';

dotenv.config();

export const config = {
  postgresHost: process.env.DB_HOST,
  postgresPort: process.env.DB_HOST_PORT,
  postgresUser: process.env.DB_USER,
  postgresPassword: process.env.DB_PASSWORD,
  postgresDB: process.env.DB_NAME,

  appPort: process.env.PORT,
};
