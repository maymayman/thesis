const projectsService = require('../service/projects');
const ProjectMD = connections.model('Projects');
const CategoryMD = connections.model('Categories');
const projectSchema = require('../models/schema/projects.js');

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
    
    const {result, error} = validateProject(data, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const project = await projectsService.createPro(result);
    
    return ResponeSuccess(req, res, {project});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const validateProject = async function (data, user) {
  try {
    let error = null;
    
    if (user.role != 'COMPANY' || !user.information || !user.information.nameCompany) {
      error = ErrorCode.USER_COMPANY_INVALID;
    }
    
    if (!data.title) {
      error = ErrorCode.PROJECT_TITLE_INVALID;
    }
    
    if (!data.countryId) {
      error = ErrorCode.USER_PASSWORD_INVALID;
    } else {
      const country = await ProjectMD.findOne({_id: data.countryId});
      if (!country || !country._id) {
        error = ErrorCode.USER_PASSWORD_INVALID;
      }
    }
    
    if (!data.categoryId) {
      error = ErrorCode.CATEGORY_INVALID;
    } else {
      const category = await CategoryMD.findOne({_id: data.categoryId});
      if (!category || !category._id) {
        error = ErrorCode.CATEGORY_INVALID;
      }
    }
        
    if (!error) {
      for (let key in projectSchema) {
        if (result[key]) {
          result[key] = data[key];
        }
      }
    }
    
    return {result, error};
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

module.exports = {
  getProjects,
  createProjects,
};