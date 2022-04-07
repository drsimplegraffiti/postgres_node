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
      user: "postgres",
      password: "Bassguitar1",
      host: "localhost",
      port: "5432",
      database: "leaderboard",
    };

const pool = new Pool(poolConfig);
module.exports = pool;
