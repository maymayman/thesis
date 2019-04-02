const followsService = require('../service/follows');
const {validateFollows} = require('../helper/validation');

const getFollowsByProjectId = async function (req, res) {
  try {
    const projectId = req.query.projectId;
    
    if (!projectId ) {
      return ResponeError(req, res, null, ErrorCode.PROJECT_ID_IS_REQUIRE);
    }
    
    const follows = await followsService.getFlsByProjectId(projectId);
    
    return ResponeSuccess(req, res, {follows});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const getProjectFollowedByUser = async function (req, res) {
  try {
    const user = req.user;
    
    if (!user ) {
      return ResponeError(req, res, null, ErrorCode.PERMISSION_DENIED);
    }
    
    const follows = await followsService.getFollowProjectWitUser(user);
    
    return ResponeSuccess(req, res, {follows});
    
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
    const {result, error} = await validateFollows(null, projectId, data, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const follow = await followsService.create(result);
    
    return ResponeSuccess(req, res, {follow});
    
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
    
    const {result, error} = await validateFollows(followId, projectId, data, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const follow = await followsService.update(followId, result);
    
    return ResponeSuccess(req, res, {follow});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};


module.exports = {
  getFollowsByProjectId,
  getProjectFollowedByUser,
  create,
  update
};