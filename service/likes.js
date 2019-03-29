const {Likes} = require('../models');
const {STATUS} = require('../config/const').USER;

const getLiByProjectId = async function (projectId) {
  try{
    
    const likes = await Likes.find({project: projectId}).limit(100);
    
    return likes;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const create = async function (follow) {
  try{
    
    const LikeModel = new Likes(follow);
    
    const LikeSaved = await LikeModel.save();
    
    return LikeSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const update = async function (_id, data) {
  try{
    const like = await Likes.findOne({_id: _id});
  
    if (!like) {
      return HandleError(ErrorCode.LIKE_NO_EXITS);
    }
  
    like.set(data);
    
    const LikeSaved = await like.save();
    
    return LikeSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

module.exports = {
  getLiByProjectId,
  create,
  update
};