//@access - Public
//@route  - POST api/v1/movies
//@desc   - routes to allow user to add their favorite movie
exports.addMovie = async (req, res) => {
	try {
		res.status(200).json({ message: 'movieadded' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//@access - Public
//@route  - GET api/v1/movies
//@desc   - routes to get all the list of movies
exports.getAllMovie = async (req, res) => {
	try {
		res.status(200).json({ message: 'all movies' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//@access - Public
//@route  - GET api/v1/movies/:id
//@desc   - routes to allow user to a single movie

exports.getMovie = async (req, res) => {
	try {
		res.status(200).json({ message: `Movie found for ${req.params.id}` });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//@access - Public
//@route  - DELETE api/v1/movies/:id
//@desc   - routes to allow users Delete movies
exports.deleteMovie = async (req, res) => {
	try {
		res.status(200).json({ message: `movie deleted for ${req.params.id}` });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//@access - Public
//@route  - PATCH api/v1/movies/:id
//@desc   - routes to allow users update movies
exports.updateMovie = async (req, res) => {
	try {
		res.status(200).json({ message: `movie updated for ${req.params.id}` });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
