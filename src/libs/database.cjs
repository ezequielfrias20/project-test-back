const { Pool } = require('pg');

const pgConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
};
const pool = new Pool(pgConfig);

pool
  .connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log(pgConfig)
    console.log('Error connecting to the database', err);
    throw err;
  });

exports.modules = {
  pool
};
