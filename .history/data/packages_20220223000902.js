import { sendStatus } from 'express/lib/response';

export function getPackages(req, res) {
  console.log(req);
  sendStatus(201);
}
