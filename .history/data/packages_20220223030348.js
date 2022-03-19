import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: '3306',
  database: 'hanshin',
  password: 'tmddbs3124',
  multipleStatements: true,
});

const SELECT_ALL_NO_TAKE =
  'SELECT date, boxId, sender, receiver, receivedDate, position, name FROM packages WHERE take=0';

const db = pool.promise();

export async function getNotTakePackages() {
  return db //
    .execute(SELECT_ALL_NO_TAKE)
    .then((result) => result[0]);
}

export async function createPackages(data) {
  console.log(data);
  return db
    .execute(
      `INSERT INTO packages (date, boxId, sender,receiver) VALUES (?,?,?,?)`,
      [data]
    )
    .then(console.log)
    .catch(console.log); //
}
