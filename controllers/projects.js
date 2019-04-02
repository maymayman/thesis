const projectsService = require('../service/projects');
const {validateProject} = require('../helper/validation');


const getAll = async function (req, res) {
  try {
    const projects = await projectsService.getAll();
    
    return ResponeSuccess(req, res, {projects});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const create = async function (req, res) {
  try {
    const data = req.body;
    const user = req.user;
    
    const {result, error} = await validateProject(data, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const project = await projectsService.create(result);
    
    return ResponeSuccess(req, res, {project});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const update = async function (req, res) {
  try {
    const body = req.body;
    const user = req.user;
    const _id = req.params._id;
    
    const {result, error} = await validateProject(body, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const project = await projectsService.update(_id, result);
    
    return ResponeSuccess(req, res, {project});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};


module.exports = {
  getAll,
  create,
  update
};