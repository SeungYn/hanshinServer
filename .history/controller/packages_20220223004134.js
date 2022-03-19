import * as packagesRepository from '../data/packages.js';

export async function getNotTakePackages(req, res) {
  packagesRepository.getNotTakePackages();
  res.sendStatus(201);
}
