import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../data/auth.js';

export async function signup(req, res) {
  const { username, password, name, email } = req.body;
  console.log(username, password, name, email);
  await userRepository.createUser({ username, password, name, email });
  res.sendStatus(201);
}

export async function login(req, res) {
  console.log(req);
  res.sendStatus(201);
}

export async function me(req, res) {
  console.log(req);
  res.sendStatus(201);
}
