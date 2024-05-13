import { getCalendar } from '../model/habitModel.js';
import { updateCalendar, findStatus } from '../model/calendarModel.js';

export const displayWeekController = async (req, res) => {
	try {
		const habit = await getCalendar(req.query.habit);
		res.render('week', { habit });
	} catch (error) {
		console.error('Error displaying calendar:', error);
		throw error;
	}
};

export const getHabitIdController = async (req, res,) => {
	try {
		const id = req.query.id;
		const habit = await findStatus(id);
		habit.status = req.query.status;
		await habit.save();
        res.status(200).render('week', { habit });
	} catch (error) {
		console.error('Error displaying calendar:', error);
		throw error;
	}
};

export const updateCalendarController = async (req, res, next) => {
    try {
        const calendar = await getCalendar(req.query.habit);
        await updateCalendar(req.query.habit);
        next();
    } catch (error) {
        console.error('Error updating calendar:', error);
        res.sendStatus(500);
    }
};