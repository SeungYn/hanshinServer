import { db, sequelize } from '../db/database.js';
const DataTypes = SQ.DataTypes;

const SELECT_ALL =
  'SELECT date, kind, boxId, sender, receiver, receivedDate, position, name FROM packages';

const SELECT_ALL_NO_TAKE =
  'SELECT date, kind, boxId, sender, receiver, receivedDate, position, name FROM packages WHERE take=0';

export async function getNotTakePackages() {
  return db //
    .execute(SELECT_ALL_NO_TAKE)
    .then((result) => result[0]);
}

export async function getNotTakePackagesByKind(kind) {
  console.log(kind);
  return db //
    .execute(`${SELECT_ALL_NO_TAKE} AND kind = ?`, [kind])
    .then((result) => result[0]);
}

export async function getAllPackages() {
  return db.execute(SELECT_ALL).then((result) => result[0]);
}

export async function createPackages(data) {
  db.query(
    `INSERT INTO packages (date, boxId, kind, sender,receiver, receivedDate, position, name) VALUES ?`,
    [data]
  );
}
export async function takePackages(boxId, name, position) {
  return db.query(
    `UPDATE packages SET take = 1, name=? , position=? WHERE boxId in (?)`,
    [name, position, boxId]
  );
}
