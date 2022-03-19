import express from 'express';
import 'express-async-errors';
import * as packagesController from '../controller/packages.js';

const router = express.Router();

router.get('/', packagesController.getNotTakePackages);

router.get('/all', packagesController.getAllPackages);

router.post('/', packagesController.createPackages);

//택배 가져가기 업데이트
router.put('/take', packagesController.updateTakePackages);
export default router;
