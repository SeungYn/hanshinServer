import express from 'express';
import 'express-async-errors';
import * as postsController from '../controller/posts.js';

const router = express.Router();

router.get('/');

export default router;
