import mongoose from 'mongoose';
const { Schema } = mongoose;

const calendarSchema = new Schema({
	date: Number,
	month: String,
	year: Number,
	status: {
		type: String,
		enum: ['Nothing', 'Done', 'Not Done'],
		default: 'Nothing',
	},
}, { timestamps: true });

export const Calendar = mongoose.model('Calendar', calendarSchema);


