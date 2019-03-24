const FollowHandle = require('express').Router();
const FollowController = require('../../controllers/follows');

FollowHandle.get('/', FollowController.getFollowsByProjectId);
FollowHandle.post('/', FollowController.create);
FollowHandle.put('/:_id', FollowController.update);

module['exports'] = FollowHandle;
