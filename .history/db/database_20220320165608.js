import mysql from 'mysql2';
import { config } from '../config.js';
import SQ from 'sequelize';

const { host, user, database, password } = config.db;
console.log(SQ);

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.databse,
  password: config.db.password,
});

export const db = pool.promise();
