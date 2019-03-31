const {Notifications} = require('../models');
const {Donates} = require('../models');
const {Projects} = require('../models');
const {STATUS} = require('../config/const').USER;

const getNotificationsByProjectId = async function (projectId, user) {
  try{
    
    const notifications = await Notifications.find({project: projectId, user: user._id}).limit(100);
    
    return notifications;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const create = async function (dataDonate, userDonate) {
  try{
    
    const userDos = new Donates.find({project: dataDonate.projectId});
    
    const project = new Projects.findOne({_id: dataDonate.projectId}).lean(true);
    
    if (userDos && userDos.length){
      let newDonates = userDos.filter(us => us.userId != userDonate._id);
  
      newDonates.forEach(donate => {
        let dataNotifi = {
          'user': donate.userId,
          'project': donate.projectId,
          'title': userDonate.username + ' have donated project ' + project.title + ' amount: ' +  dataDonate.amount
        };
        
        let notifications = new Notifications(dataNotifi);
        notifications.save();
      });
    }
    
    return;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const update = async function (_id, is_read) {
  try{
    const notification = await Notifications.findOne({_id: _id});
  
    if (!notification) {
      return HandleError(ErrorCode.NOTIFICATION_NO_EXITS);
    }
  
    notification.set(is_read);
    
    const notificationSaved = await notification.save();
    
    return notificationSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

module.exports = {
  getNotificationsByProjectId,
  create,
  update
};