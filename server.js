const dotenv = require('dotenv');
dotenv.config({});
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const movieRouter = require('./router/movieRouter');
const PORT = process.env.PORT || 5000;

const app = express();
//connect to the database
connectDB();

//Middlewares
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

//routes
app.use('/api/v1/movies', movieRouter);
app.listen(PORT, () =>
	console.log(
		`The server is running on port ${PORT} in ${process.env.NODE_ENV} `
	)
);
