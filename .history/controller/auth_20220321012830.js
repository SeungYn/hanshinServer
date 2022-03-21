import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../data/auth.js';
import { config } from '../config.js';

export async function signup(req, res) {
  const { username, password, name, email } = req.body;

  const found = await userRepository.findByUsername(username);
  console.log(found, 'asdd');
  if (found) {
    return res.status(409).json({
      message: `${username} already exists`,
    });
  }

  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);

  const { id, authority } = await userRepository
    .createUser({
      username,
      password: hashed,
      name,
      email,
    })
    .then((result) => userRepository.findById(result));

  const token = createJwtToken(id, authority);

  res.status(201).send({ token, username });
}

export async function login(req, res) {
  const { username, password } = req.body;
  console.log(username, password);
  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid user or password' });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid user or password' });
  }

  const token = createJwtToken(user.id, user.authority);
  res.status(200).json({ token, username });
}

function createJwtToken(id, authority) {
  return jwt.sign({ id, authority }, config.jwt.secretKey, {
    expiresIn: config.jwt.expireInSec,
  });
}

export async function me(req, res) {
  const user = await userRepository.findById(req.userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  console.log(req.token);
  res.status(200).json({ token: req.token, username: user.username });
}
