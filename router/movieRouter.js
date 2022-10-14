const express = require('express');
const {
	addMovie,
	getAllMovie,
	getMovie,
	deleteMovie,
	updateMovie,
} = require('../controller/movieController');

const router = express.Router();

router.route('/').post(addMovie).get(getAllMovie);
router.route('/:id').get(getMovie).delete(deleteMovie).patch(updateMovie);
module.exports = router;
