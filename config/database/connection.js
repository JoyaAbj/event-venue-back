require('dotenv').config();
const mysql = require('mysql2');
const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

pool.getConnection((err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Database connected successfully');
});

module.exports = pool.promise();
