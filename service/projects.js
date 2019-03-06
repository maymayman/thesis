const { Projects } = require('../models');

const getPro = async function() {
  try {
    
    const listProjects = await Projects.find({});
    
    return listProjects;
    
  }catch (error) {
    return HandleError(error);
  }
};

const createPro = async function(category) {
  try {
    const ProjectsModel = new Projects(category);
    
    const projectSaved= await ProjectsModel.save();
    
    return projectSaved;
    
  }catch (error) {
    return HandleError(error);
  }
};

module.exports = {
  getPro,
  createPro,
};