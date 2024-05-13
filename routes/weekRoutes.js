import express from 'express';
import {
	displayWeekController,
	getHabitIdController,
	updateCalendarController
} from '../controller/weekController.js';

const router = express.Router();

router.get('/', updateCalendarController, displayWeekController);
router.put('/', getHabitIdController);

export default router;
