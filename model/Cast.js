const mongoose = require('mongoose');

const actorsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please eneter atitle'],
	},
});

const Cast = mongoose.model('Cast', actorsSchema);
module.exports = Cast;
