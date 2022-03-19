import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../data/auth.js';

export function signup(req, res) {
  const { username, password, name, email } = req.body;
  console.log(username, password, name, email);
  res.sendStatus(201);
}

export function login(req, res) {
  console.log(req);
  res.sendStatus(201);
}

export function me(req, res) {
  console.log(req);
  res.sendStatus(201);
}
