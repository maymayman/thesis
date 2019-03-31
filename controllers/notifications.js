const notificationsService = require('../service/notifications');
const {validateBoolean} = require('../helper/utils.js');

const getNotificationsOfUser = async function (req, res) {
  try {
    const projectId = req.query.projectId;
    const user = req.user;
    
    if ((!user && !user._id)) {
      return ResponeError(req, res, null, ErrorCode.USER_NAME_INVALID);
    }
    
    const notifications = await notificationsService.getNotificationsUser(user);
    
    return ResponeSuccess(req, res, {notifications});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const update = async function (req, res) {
  try {
    const is_read = req.body;
    const notificationId = req.params._id ? req.params._id : '';
    const user = req.user;
  
    if (!notificationId) {
      return ResponeError(req, res, null, ErrorCode.NOTIFICATION_ID_IS_REQUIRE);
    }
    
    if (!is_read || !validateBoolean(is_read)) {
      return ResponeError(req, res, null, ErrorCode.IS_READ_TYPE_BOOLEAN);
    }
    
    const dataUpdated = await notificationsService.update(notificationId, is_read);
    
    return ResponeSuccess(req, res, {dataUpdated});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};


module.exports = {
  getNotificationsOfUser,
  update
};