import { Habit } from './habitSchema.js';
import { createCalendar, findCalendar } from './calendarModel.js';
export async function createHabit(data) {
	try {
		const habit = await Habit.findOne({ description: data });
		if (!habit) {
			const newCalendar = await createCalendar();
			const habit = new Habit({
				description: data,
				tracker: newCalendar._id,
			});
			await habit.save();
			return '';
		} else return 'Already exists';
	} catch (error) {
		console.error('Error creating habit:', error);
		throw error;
	}
}

export async function getHabitDescriptions() {
	try {
		const habits = await Habit.find();
		return habits.map((habit) => habit.description);
	} catch (error) {
		console.error('Error fetching habit descriptions:', error);
		throw error;
	}
}

export async function getCalendar(habit) {
	let all = [];
	const habits = await Habit.findOne({ description: habit });
	const tracker = habits.tracker;
	for (let i = 0; i < tracker.length; i++) {
		const temp = tracker[i];
		let calendarEntries = await findCalendar(temp);
		all = all.concat(calendarEntries);
	}
	return all;
}

export async function deleteHabit(id) {
	try {
		await Habit.findByIdAndDelete(id);
	} catch (error) {
		console.error('Error deleting habit:', error);
		throw error;
	}
}
