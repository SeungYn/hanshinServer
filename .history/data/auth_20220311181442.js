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

  return db
    .execute(
      `INSERT INTO users (username, name, password, email) VALUES (?,?,?,?)`,
      [username, name, password, email]
    )
    .then((result) => result[0].userId);
}

export async function findById(id) {
  return db
    .execute('SELECT * FROM users WHERE id = ?', [id])
    .then((result) => result[0][0]);
}

export async function findByUsername(username) {
  return db
    .execute('SELECT * FROM users WHERE username = ?', [username])
    .then((result) => result[0][0]);
}
