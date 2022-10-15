const Movie = require('../model/Movie');
//@access - Public
//@route  - POST api/v1/movies
//@desc   - routes to allow user to add their favorite movie
exports.addMovie = async (req, res) => {
	try {
		const { category, title, description, release_date, actors } = req.body;
		if (!category || !title || !description || !release_date) {
			return res.status(500).json({
				message:
					'category, title, description and release date are all required',
			});
		}
		const movie = await Movie.create({
			category,
			title,
			description,
			release_date,
			actors,
		});
		res
			.status(200)
			.json({ success: true, message: 'Movie Added', data: movie });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//@access - Public
//@route  - GET api/v1/movies
//@desc   - routes to get all the list of movies
exports.getAllMovie = async (req, res) => {
	try {
		const queryObj = { ...this.qu };
		const movie = await Movie.find()
			.populate({
				path: 'category',
				select: 'title -_id ',
			})
			.exec();

		res.status(200).json({ success: true, results: movie.length, data: movie });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//@access - Public
//@route  - GET api/v1/movies/:id
//@desc   - routes to allow user to a single movie

exports.getMovie = async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);
		const movie = await Movie.findById(id);
		if (!movie) {
			return res.status(404).json({ message: `Movie not found` });
		}
		res.status(200).json({ success: true, data: movie });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//@access - Public
//@route  - DELETE api/v1/movies/:id
//@desc   - routes to allow users Delete movies
exports.deleteMovie = async (req, res) => {
	try {
		const { id } = req.params;

		const movie = await Movie.findById(id);

		if (!movie) {
			return res.status(404).json({ message: `Movie not found` });
		}
		await Movie.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: 'Deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//@access - Public
//@route  - PATCH api/v1/movies/:id
//@desc   - routes to allow users update movies
exports.updateMovie = async (req, res) => {
	try {
		const { id } = req.params;

		const movie = await Movie.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!movie) {
			return res.status(404).json({ message: `Movie not found` });
		}

		res.status(200).json({ success: true, data: movie });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
