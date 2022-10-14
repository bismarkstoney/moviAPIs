const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please eneter atitle'],
	},
	realease_date: {
		type: Date,
		required: [true, 'Please add date'],
	},
	description: {
		type: String,
		required: [true, 'Add a description'],
	},
	category: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Category',
		required: [true, 'Category is required'],
	},
	actors: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Cast',
	},
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
