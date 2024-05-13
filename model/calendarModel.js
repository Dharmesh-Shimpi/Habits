import { Habit } from './habitSchema.js';
import { Calendar } from './calenderSchema.js';
export async function createCalendar() {
	try {
		const currentDate = new Date();
		const currentDay = currentDate.getDate();
		const currentMonth = currentDate.toLocaleString('default', {
			month: 'long',
		});
		const currentYear = currentDate.getFullYear();
		const calendar = new Calendar({
			date: currentDay,
			month: currentMonth,
			year: currentYear,
		});
		await calendar.save();
		return calendar;
	} catch (error) {
		console.error('Error creating calendar:', error);
		throw error;
	}
}

export async function updateStatus(date, value) {
	try {
		let calendarEntry = await Calendar.findOne({ date: date });
		if (!calendarEntry) {
			calendarEntry = new Calendar({
				date: date,
				value: value,
			});
		} else {
			calendarEntry.value = value;
		}

		await calendarEntry.save();

		return calendarEntry;
	} catch (error) {
		console.error('Error updating calendar:', error);
		throw error;
	}
}

export async function updateCalendar(habitDescription) {
	try {
		const habit = await Habit.findOne({ description: habitDescription });
		if (!habit) {
			throw new Error('Habit not found');
		}
		
		const creationDate = habit.createdAt;
		const currentDate = new Date();

		for (
			let date = creationDate;
			date <= currentDate;
			date.setDate(date.getDate() + 1)
		) {
			
			const year = date.getFullYear();
			const month = date.toLocaleString('default', { month: 'long' });
			const day = date.getDate();

			const existingEntry = await Calendar.findOne({
				date: day,
				month: month,
				year: year,
			});

			if (!existingEntry) {
				await Calendar.create({
					date: day,
					month: month,
					year: year,
					status: 'Nothing',
				});
			}
		}

		console.log('Calendar updated successfully');
	} catch (error) {
		console.error('Error updating calendar:', error);
	}
}

export async function findCalendar(id) {
	try {
		const calendarEntries = await Calendar.find({
			_id: id,
		});
		return calendarEntries;
	} catch (error) {
		console.error('Error getting calendar:', error);
		throw error;
	}
}

export async function findStatus(id) {
	try {
		const calendarEntries = await Calendar.findById(id);
		return calendarEntries;
	} catch (error) {
		console.error('Error getting calendar:', error);
		throw error;
	}
}
