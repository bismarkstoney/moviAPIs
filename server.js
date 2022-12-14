const dotenv = require('dotenv');
dotenv.config({});
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const connectDB = require('./config/db');
const movieRouter = require('./router/movieRouter');
const movieCategory = require('./router/category');

const PORT = process.env.PORT || 5000;

const app = express();
//connect to the database
connectDB();

//Middlewares
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.use(helmet());

//routes
app.use('/api/v1/movies', movieRouter);
app.use('/api/v1/category', movieCategory);

//health check path
app.get('/', (req, res) => {
	res.status(200).json({ message: 'Passed' });
});
app.listen(PORT, () =>
	console.log(
		`The server is running on port ${PORT} in ${process.env.NODE_ENV} `
	)
);

module.exports = app;
