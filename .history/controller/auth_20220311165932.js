import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export function signup(req, res) {
  console.log(req);
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
