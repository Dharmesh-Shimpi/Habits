import { createHabit, getHabitDescriptions } from '../model/habitModel.js';

export const createController = async (req, res) => {
	try {
		console.log(req.body);
		const error = await createHabit(req.body.description);
		const habitDescriptions = await getHabitDescriptions();
		res.status(200).render('detail', { habitDescriptions, error });
	} catch (error) {
		console.error('Error creating habit:', error);
		res.status(500).json({ error: 'Error creating habit' });
	}
};

export const displayHabitController = async (req, res) => {
	try {
		const habitDescriptions = await getHabitDescriptions();
		const error = '';
		res.status(200).render('detail', { habitDescriptions, error });
	} catch (error) {
		console.error('Error displaying habit:', error);
		throw error;
	}
};
