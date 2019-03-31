const NotificationHandle = require('express').Router();
const NotificationController = require('../../controllers/notifications');

NotificationHandle.get('/', NotificationController.getNotiByProjectId);
NotificationHandle.put('/:_id', NotificationController.update);

module['exports'] = NotificationHandle;
