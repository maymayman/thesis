const {Follows} = require('../models');
const {STATUS} = require('../config/const').USER;

const getFlsByProjectId = async function (projectId) {
  try{
    
    const follows = await Follows.find({project: projectId}).limit(100);
    
    return follows;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const create = async function (follow) {
  try{
    
    const FollowsModel = new Follows(follow);
    
    const FollowSaved = await FollowsModel.save();
    
    return FollowSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const update = async function (_id, data) {
  try{
    const follow = await Follows.findOne({_id: _id});
  
    if (!follow) {
      return HandleError(ErrorCode.FOLLOW_NO_EXITS);
    }
  
    follow.set(data);
    
    const FollowSaved = await follow.save();
    
    return FollowSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

module.exports = {
  getFlsByProjectId,
  create,
  update
};