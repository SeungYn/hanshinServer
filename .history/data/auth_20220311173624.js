import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: '3306',
  database: 'hanshin',
  password: 'tmddbs3124',
  multipleStatements: true,
});

const db = pool.promise();
