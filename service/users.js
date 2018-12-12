const Class = require('../models').Users;
const { STATUS } = require('../config/const').USER;

module.exports = {
	create: async function(data) {
		try {
			const Model = new Class(data);

			const record = await Model.save();

			return record;
		} catch(error) {
			return HandleError(error);
		}
	},

	findById: async function(_id) {
		try {
			const record = await Class.findById(_id);

			if (!record || record["status"] !== STATUS.APPROVED) {
				return HandleError(ErrorCode.USER_NOT_EXISTS);
			}

			if (record) {
				record.password = undefined;
			}

			return record;
		} catch(error) {
			return HandleError(error);
		}
	},

	find: async function(query) {
		try {
			const where = query["where"];
			const limit = (!query["limit"] || parseInt(query["limit"]) > 20) ? 20 : query["limit"];
			const skip = query["skip"] || 0;
			const sort = query["sort"] || {createdAt: -1};
			const records = await Users.find(where).limit(limit).skip(skip).sort(sort);

			return records;
		} catch(error) {
			return HandleError(error);
		}
	},

	update: async function(_id, data) {
		try {
			let record = await Class.findById(_id);

			if (!record || record["status"] !== STATUS.APPROVED) {
				return HandleError(ErrorCode.USER_NOT_EXISTS);
			}

			record.set(data);

			record = await record.save();

			return records;
		} catch(error) {
			return HandleError(error);
		}
	},

	authUser: async function(username, password) {
		try {
			const user = await Users.findOne({username: username, status: STATUS.APPROVED});

			if (!user) {
				return HandleError(ErrorCode.USER_NOT_EXISTS);
			}

			const authentication = await user.comparePassword(password);

			if (!authentication) {
				return HandleError(ErrorCode.USER_NAME_OR_PASSWORD_INVALID);
			}

			user.password = undefined;

			return user;
		} catch(error) {
			return HandleError(error);
		}
	},

	delete: async function(_id) {
		try {
			let record = await Class.findById(_id);

			if (!record || record["status"] !== STATUS.APPROVED) {
				return HandleError(ErrorCode.USER_NOT_EXISTS);
			}

			record.set("status",  STATUS.DELETED);

			record = await record.save();

			return records;
		} catch(error) {
			return HandleError(error);
		}
	},
}