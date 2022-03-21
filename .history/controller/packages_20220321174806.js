import * as packagesRepository from '../data/packages.js';

export async function getAllPackages(req, res) {
  const data = await packagesRepository.getAllPackages();
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: '잘못' });
  }
}

//가져가지 않은 택배들
export async function getNotTakePackages(req, res) {
  const { kind } = req.query;

  const data = await (kind
    ? packagesRepository.getNotTakePackagesByKind(kind)
    : packagesRepository.getNotTakePackages());

  res.status(200).json(data);
}

export async function createPackages(req, res) {
  const data = req.body.packages;
  // const packagesList = data.map((item) => [
  //   item.date,
  //   item.boxId,
  //   item.kind,
  //   item.sender,
  //   item.receiver,
  //   item.receivedDate,
  //   item.position,
  //   item.name,
  // ]);

  //date, boxId, kind, sender,receiver, receivedDate, position, name
  packagesRepository.createPackages(data);
  res.sendStatus(200);
}

//택배 가져가기
export async function updateTakePackages(req, res) {
  const { boxId, name, position } = req.body;

  await packagesRepository.takePackages(boxId, name, position);
  res.status(200).json('ggod');
}
