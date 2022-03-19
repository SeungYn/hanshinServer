import * as packagesRepository from '../data/packages.js';

export async function getNotTakePackages(req, res) {
  const data = await packagesRepository.getNotTakePackages();
  console.log(data);
  res.status(200).json(data);
}
