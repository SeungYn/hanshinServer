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

  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res.status.json({ message: 'Invalid user or password' });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status.json({ message: 'Invalid user or password' });
  }

  const token = createJwtToken(user.id, user.authority);
  res.status(200).json({ token, username });
}

function createJwtToken(id, authority) {
  return jwt.sign({ id, authority }, 'as3d', {
    expiresIn: '2d',
  });
}

export async function me(req, res) {
  const user = await userRepository.findById(req.userId);
  console.log(req);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ token: req.token, username: user.username });
}
