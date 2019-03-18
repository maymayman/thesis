const commentsService = require('../service/comments');
const {validateComment} = require('../helper/validation')

const getCmByProjectId = async function (req, res) {
  try {
    const projectId = req.query.projectId;
    
    if (!projectId ) {
      return ResponeSuccess(req, res, {});
    }
    
    const comments = await commentsService.getCommentsByProjectId(projectId);
    
    return ResponeSuccess(req, res, {comments});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const create = async function (req, res) {
  try {
    const data = req.body;
    const projectId = req.query.projectId ? req.query.projectId : '';
    const user = req.user;
    
    if (!projectId ) {
      return ResponeSuccess(req, res, {});
    }
    const {result, error} = await validateComment(null, projectId, data, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const comment = await commentsService.create(result);
    
    return ResponeSuccess(req, res, {comment});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const update = async function (req, res) {
  try {
    const data = req.body;
    const projectId = req.query.projectId ? req.query.projectId : '';
    const commentId = req.params._id ? req.params._id : '';
    
    if (!projectId || !commentId) {
      return ResponeSuccess(req, res, {});
    }
    
    const user = req.user;
    
    const {result, error} = await validateComment(commentId, projectId, data, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const dataUpdated = await commentsService.update(commentId, result);
    
    return ResponeSuccess(req, res, {dataUpdated});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};


module.exports = {
  getCmByProjectId,
  create,
  update
};