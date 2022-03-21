import SQ from 'sequelize';
import { db, sequelize } from '../db/database.js';
const DataTypes = SQ.DataTypes;

const Packages = sequelize.define('package', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  boxId: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  kind: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  sender: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  receiver: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  receivedDate: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  date: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  position: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  take: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

const SELECT_ALL =
  'SELECT date, kind, boxId, sender, receiver, receivedDate, position, name FROM packages';

const SELECT_ALL_NO_TAKE =
  'SELECT date, kind, boxId, sender, receiver, receivedDate, position, name FROM packages WHERE take=0';
const SELECT_ALL_NO_TAKE_SQ = {
  attributes: [
    'date',
    'kind',
    'boxId',
    'sender',
    'receiver',
    'receivedDate',
    'position',
    'name',
  ],
};
export async function getNotTakePackages() {
  return Packages.findAll({
    ...SELECT_ALL_NO_TAKE_SQ,
    where: { take: 0 },
  });
  // return db //
  //   .execute(SELECT_ALL_NO_TAKE)
  //   .then((result) => result[0]);
}

export async function getNotTakePackagesByKind(kind) {
  console.log(kind);
  return Packages.findAll({
    attributes: SELECT_ALL_NO_TAKE_SQ,
    where: { take: 0, kind },
  });
  // return db //
  //   .execute(`${SELECT_ALL_NO_TAKE} AND kind = ?`, [kind])
  //   .then((result) => result[0]);
}

export async function getAllPackages() {
  return db.execute(SELECT_ALL).then((result) => result[0]);
}

export async function createPackages(data) {
  console.log(data);
  Packages.bulkCreate(data).then((result) => {
    console.log(result);
  });
  // db.query(
  //   `INSERT INTO packages (date, boxId, kind, sender,receiver, receivedDate, position, name) VALUES ?`,
  //   [data]
  // );
}
export async function takePackages(boxId, name, position) {
  Packages.findAll({
    where: { boxId },
  }).then((data) => console.log(data.id));
  // return db.query(
  //   `UPDATE packages SET take = 1, name=? , position=? WHERE boxId in (?)`,
  //   [name, position, boxId]
  // );
}
