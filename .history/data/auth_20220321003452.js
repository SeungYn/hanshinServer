import SQ from 'sequelize';
import { db, sequelize } from '../db/database.js';
const DataTypes = SQ.DataTypes;

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(70),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
});
export async function createUser(user) {
  const { username, name, password, email } = user;

  return User.create(user).then((data) => {
    console.log(data);
    return data;
  });

  // return db
  //   .execute(
  //     `INSERT INTO users (username, name, password, email) VALUES (?,?,?,?)`,
  //     [username, name, password, email]
  //   )
  //   .then((result) => result[0].insertId);
}

export async function findById(id) {
  return User.findByPk(id);
  // return db
  //   .execute('SELECT * FROM users WHERE id = ?', [id])
  //   .then((result) => result[0][0]);
}

export async function findByUsername(username) {
  return User.findOne({ where: { username } });
  // return db
  //   .execute('SELECT * FROM users WHERE username = ?', [username])
  //   .then((result) => result[0][0]);
}
