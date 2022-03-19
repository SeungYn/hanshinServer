import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../data/auth.js';

const salt = 10;
export async function signup(req, res) {
  const { username, password, name, email } = req.body;

  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({
      message: `${username} already exists`,
    });
  }

  const hashed = await bcrypt.hash(password, salt);

  const userId = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
  });
  res.sendStatus(201);
}

export async function login(req, res) {
  const { username, password } = req.body;

  res.sendStatus(200);
}

export async function me(req, res) {
  console.log(req);
  res.sendStatus(201);
}