import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'hanshin',
  password: 'tmddbs3124',
});

const db = pool.promise();

export async function getNotTakePackages() {
  return db
    .execute(`SELECT * FROM packages`)
    .then((result) => console.log(result))
    .catch(console.log);
}
