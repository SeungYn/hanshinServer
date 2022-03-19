import * as packagesRepository from '../data/packages.js';

export async function getNotTakePackages(req, res) {
  const data = packagesRepository.getNotTakePackages();
  res.sendStatus(200).json(data);
}
