const { ROLE } = require('../config/const').USER;

module.exports = function auth(req, res, next) {
  const user = req.user;

  if (user["role"] !== ROLE.ADMIN) {
    return ResponeError(req, res, error, ErrorCode.PERMISSION_DENIED);
  }

  return next();
}