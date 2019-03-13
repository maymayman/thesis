const {Comments} = require('../models');

const getCommentsByProjectId = async function (projectId) {
  try{
    
    const comments = await Comments.findOne({projectId: projectId});
    
    return comments;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const create = async function (comment) {
  try{
    
    const CommentsModel = new Comments(comment);
    
    const CommentSaved = await CommentsModel.save();
    
    return CommentSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};

const update = async function (_id, data) {
  try{
    const comment = await Comments.findById({project: _id, user: data.user});
  
    if (!comment) {
      return HandleError(ErrorCode.COMMENT_NO_EXITS);
    }
  
    comment.set(data);
    
    const CommentSaved = await comment.save();
    
    return CommentSaved;
    
  }catch (error) {
    return HandleError(error);
    
  }
};





module.exports = {
  getCommentsByProjectId,
  create,
  update
};