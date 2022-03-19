import express from 'express';
import 'express-async-errors';
import * as packagesController from '../controller/packages.js';

const router = express.Router();

router.get('/', packagesController.getNotTakePackages);

//router.post('/', packagesController.create);

export default router;
