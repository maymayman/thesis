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
    
    const {result, error} = await projectsService.validateProject(data, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const project = await projectsService.createPro(result);
    
    return ResponeSuccess(req, res, {project});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};


module.exports = {
  getProjects,
  createProjects,
};