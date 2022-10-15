const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please eneter atitle'],
	},
	release_date: {
		type: Date,
		required: [true, 'Please add date'],
	},
	description: {
		type: String,
		required: [true, 'Add a description'],
	},
	rank: {
		type: String,
		required: [true, 'Add a rank'],
	},
	actors: {
		type: [String],
	},
	category: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Category',
	},
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
