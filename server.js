const dotenv = require('dotenv');
dotenv.config({});
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

const app = express();
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.listen(PORT, () =>
	console.log(
		`The server is running on port ${PORT} in ${process.env.NODE_ENV} `
	)
);
