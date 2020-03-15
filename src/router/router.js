import express from 'express';
import { renderMain } from '../controller/controllerMain.js';

const router = express.Router();

router.get('/', renderMain);

export default router;
