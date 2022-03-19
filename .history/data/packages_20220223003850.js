import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost:8080',
  user: 'root',
  database: 'hanshin',
  password: 'tmddbs3124',
});
