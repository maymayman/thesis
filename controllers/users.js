const userService = require('../service/users.js');
const { indexOf, values } = require('lodash');
const { ROLE, GENDER } = require('../config/const.js').USER;
const { validateEmail } = require('../helper/utils.js');
const usesSchema = require('../models/schema/schema.js').users;

module.exports = {
	create: async function(req, res) {
		try {
			const body = req.body;
			const { data, error } = validateUser(body);

			if (error) {
				return ResponeError(req, res, null, error);
			}

			const user = await userService.create(data);
			const token = await user.generateToken();

			return ResponeSuccess(req, res, {user, token});
		} catch(error) {
			return ResponeError(req, res, error, error.message);
		}
	},

	findById: async function(req, res) {
		try {
			const _id = req.params.id;
			const user = await userService.findById(_id);

			return ResponeSuccess(req, res, {user});
		} catch(error) {
			return ResponeError(req, res, error, error.message);
		}
	},

	find: async function(req, res) {
		try {
			const query = req.query;
			const users = await userService.find(query);

			return ResponeSuccess(req, res, {users});
		} catch(error) {
			return ResponeError(req, res, error, error.message);
		}
	},

	update: async function(req, res) {
		try {
			const _id = req.params.id;
			const body = req.body;
			const { data, error } = validateUser(body);

			if (error) {
				return ResponeError(req, res, null, error);
			}

			const user = await userService.update(_id, data);

			return ResponeSuccess(req, res, {user});
		} catch(error) {
			return ResponeError(req, res, error, error.message);
		}
	},

	delete: async function(req, res) {
		try {
			const _id = req.params.id;
			const user = await userService.delete(_id);

			return ResponeSuccess(req, res, {user});
		} catch(error) {
			return ResponeError(req, res, error, error.message);
		}
	},

	login: async function(req, res) {
		try {
			const body = req.body;

			if (!body.username) {
				return ResponeError(req, res, error, ErrorCode.USER_NAME_INVALID);
			}
			if (!body.password) {
				return ResponeError(req, res, error, ErrorCode.USER_PASSWORD_INVALID);
			}

			const user = await userService.authUser(body.username, body.password);
			const token = await user.generateToken();

			return ResponeSuccess(req, res, {user, token});
		} catch(error) {
			return ResponeError(req, res, error, error.message);
		}
	}
}

const validateUser = function(body) {
	let data = body;
	let error = null;
	if (!body.username) {
		error = ErrorCode.USER_NAME_INVALID;
	}
	if (!body.password) {
		error = ErrorCode.USER_PASSWORD_INVALID;
	}
	// if (!body.role || indexOf(values(ROLE), body.role) < 0) {
	// 	error = ErrorCode.USER_ROLE_INVALID;
	// }
	if (!body.email || !validateEmail(body.email)) {
		error = ErrorCode.USER_EMAIL_INVALID;
	}
	if (!body.gender || indexOf(values(GENDER), body.gender) < 0) {
		error = ErrorCode.USER_GENDER_INVALID;
	}

	delete data["status"];

	return { data, error };
};