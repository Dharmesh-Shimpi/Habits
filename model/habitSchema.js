import mongoose from 'mongoose';
const { Schema } = mongoose;

const habitSchema = new Schema({
	description: {
		type: String,
		required: true,
	},
	tracker: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Calendar',
		},
	],
}, { timestamps: true });

export const Habit = mongoose.model('Habit', habitSchema);