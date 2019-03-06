const projectsService = require('../service/projects');

const getProjects = async function (req, res) {
  try {
    const projects = await projectsService.getPro();
    
    return ResponeSuccess(req, res, {projects});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const createProjects = async function (req, res) {
  try {
    const data = req.body;
    const user = req.user;
    
    if(!data || !user || user.role != 'COMPANY'){
      return ResponeError(req, res, null, ErrorCode.USER_ROLE_INVALID);
    }
    
    const project = await projectsService.createPro(data);
    
    return ResponeSuccess(req, res, {project});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

module.exports = {
  getProjects,
  createProjects,
};