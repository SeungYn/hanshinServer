import * as packagesRepository from '../data/packages.js';

//가져가지 않은 택배들
export async function getNotTakePackages(req, res) {
  const data = await packagesRepository.getNotTakePackages();

  res.status(200).json(data);
}

export async function createPackage(req, res) {
  const { date, boxId, sender, receiver } = req.body;
  console.log(date, boxId, sender, receiver);
  packagesRepository.createPackage(date, boxId, sender, receiver);
  res.sendStatus(200);
}
