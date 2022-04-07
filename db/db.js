const pg = require("pg");
const { Pool } = pg;

const poolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_database,
    };

const pool = new Pool(poolConfig);
module.exports = pool;
