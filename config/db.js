const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const connectDatabase = await mongoose.connect(process.env.DB_URL);
		console.log(
			`The database has connect on ${connectDatabase.connection.host}`
		);
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDB;
