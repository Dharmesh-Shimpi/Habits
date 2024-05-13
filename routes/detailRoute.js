import express from 'express';
import {
	displayHabitController,
	createController,
} from '../controller/detailController.js';
const router = express.Router();

router.get('/', displayHabitController);
router.post('/', createController);

export default router;
