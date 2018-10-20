const { Users } = require('../models');
module.exports = {
	create: async function(data) {
		try {
			const userModel = new Users(data);

			const user = await userModel.save();

			return user;
		} catch(error) {
			
			console.error('+++++++++++++++++++');
			// console.error(error, '+++++++++++++++++++');
			console.error(error.message, '+++++++++++', error.path);
			for (let key in error) {
				console.log(key, '-------------', error[key]);
			}
			console.error('+++++++++++++++++++');
			console.log(error.name);
			return HandleError(error);
			// throw new Error(error.message);
		}
	},

	getById: async function(_id) {
		try {
			const user = await Users.findById(_id);

			if (user) {
				user.password = undefined;
			}

			return user;
		} catch(error) {
			console.error(error);
			throw new Error(error.message);
		}
	}
}