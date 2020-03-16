import express from 'express';
import { renderIndex } from '../controller/controllerMain.js';

const router = express.Router();

router.get('/', renderIndex);

export default router;
