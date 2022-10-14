const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please eneter category'],
	},
});

const Category = mongoose.model('Category');
module.exports = Movie;
