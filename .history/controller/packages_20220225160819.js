import * as packagesRepository from '../data/packages.js';

export async function getAllPackages(req, res) {
  const data = await packagesRepository.getAllPackages();
  if (data) {
    res.sendStatus(200);
  }
  res.sendStatus(201);
}

//가져가지 않은 택배들
export async function getNotTakePackages(req, res) {
  const data = await packagesRepository.getNotTakePackages();

  res.status(200).json(data);
}

export async function createPackages(req, res) {
  let data = req.body.map((i) => [i.date, i.boxId, i.sender, i.receiver]);

  packagesRepository.createPackages(data);
  res.sendStatus(200);
}
