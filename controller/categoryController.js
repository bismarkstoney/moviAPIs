//@access - Public
//@route  - POST api/v1/category

const Category = require('../model/Categories');

//@desc   - routes to allow  to add movie catogory
exports.addCategory = async (req, res) => {
	try {
		const { title } = req.body;
		if (!title) {
			return res.status(500).json({
				message: 'title is  required',
			});
		}
		const category = await Category.create({
			title,
		});
		res
			.status(200)
			.json({ success: true, message: 'Category Added', data: category });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
