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

export async function createUser(user) {
  const { username, name, password, email } = user;

  db.execute(
    `INSERT INTO user (username, name, password, email) VALUES (?,?,?,?)`,
    [username, name, password, email]
  ).then(console.log);
}
