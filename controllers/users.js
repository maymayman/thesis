const userService = require('../service/users');
module.exports = {
	create: async function(req, res) {
		try {
			res.setHeader('Content-Type', 'application/json');
			const body = req.body;
			const user = await userService.create(body);
			const token = await user.generateToken();

			return ResponeSuccess(req, res, {user, token});
		} catch(error) {
			return ResponeError(req, res, error, error.message);
		}
	}
}