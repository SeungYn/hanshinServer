import * as packagesRepository from '../data/packages.js';

//가져가지 않은 택배들
export async function getNotTakePackages(req, res) {
  const data = await packagesRepository.getNotTakePackages();

  res.status(200).json(data);
}

export async function createPackage(req, res) {
  console.log(1);
}
