const dotenv = require('dotenv');
dotenv.config({});
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const ratelimit = require('express-rate-limit');
const connectDB = require('./config/db');
const movieRouter = require('./router/movieRouter');
const movieCategory = require('./router/category');

const PORT = process.env.PORT || 5000;
let allowedOrigin = [
	'https://movie-api-cw7g.onrender.com/',
	`http://localhost:${PORT}`,
];

const limiter = ratelimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();
//connect to the database
connectDB();

//Middlewares
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.use(helmet());
app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin) return callback(null, true);
			if (allowedOrigin.indexOf(origin) === -1) {
				var msg =
					'The CORS policy for this site does not ' +
					'allow access from the specified Origin.';
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		},
	})
);
app.use(limiter);
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
