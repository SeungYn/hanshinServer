import * as packagesRepository from '../data/packages.js';

//가져가지 않은 택배들
export async function getNotTakePackages(req, res) {
  const data = await packagesRepository.getNotTakePackages();

  res.status(200).json(data);
}

export async function createPackages(req, res) {
  console.log(req.body);
  let test = req.body.map((i) => [i.date, i.boxId, i.sender, i.receiver]);
  console.log(test);
  //packagesRepository.createPackages(date, boxId, sender, receiver);
  res.sendStatus(200);
}
