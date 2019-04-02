const likesService = require('../service/likes');
const {validateLikes} = require('../helper/validation');

const getLikesByProjectId = async function (req, res) {
  try {
    const projectId = req.query.projectId;
    
    if (!projectId ) {
      return ResponeError(req, res, null, ErrorCode.PROJECT_ID_IS_REQUIRE);
    }
    
    const likes = await likesService.getLiByProjectId(projectId);
    
    return ResponeSuccess(req, res, {likes});
    
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
      return ResponeError(req, res, null, ErrorCode.PROJECT_ID_IS_REQUIRE);
    }
    const {result, error} = await validateLikes(null, projectId, data, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const like = await likesService.create(result);
    
    return ResponeSuccess(req, res, {like});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const update = async function (req, res) {
  try {
    const data = req.body;
    const projectId = req.query.projectId ? req.query.projectId : '';
    const followId = req.params._id ? req.params._id : '';
    const user = req.user;
  
    if (!projectId || !followId) {
      return ResponeError(req, res, null, ErrorCode.PROJECT_ID_OR_COMMENT_ID_IS_REQUIRE);
    }
    
    const {result, error} = await validateLikes(followId, projectId, data, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const like = await likesService.update(followId, result);
    
    return ResponeSuccess(req, res, {like});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};


module.exports = {
  getLikesByProjectId,
  create,
  update
};