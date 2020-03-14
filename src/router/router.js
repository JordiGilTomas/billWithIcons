import express from 'express';
import controllerMain from '../controller/controllerMain.js';

const router = express.Router();

router.get('/', controllerMain.main);

export default router;
