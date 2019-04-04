const { Projects } = require('../models');
const { Donates } = require('../models');
const {checkExitsProject} = require('../helper/utils.js');
const {checkExitsCategory} = require('../helper/utils.js');
const {checkExitsCountry} = require('../helper/utils.js');

const getAllProjects = async function(query, limit, skip) {
  try {
    
      const listProjects = await Projects.find(query).limit(limit).skip(skip);
      
      return listProjects;
    
  }catch (error) {
    return HandleError(error);
  }
};

const create = async function(category) {
  try {
    const ProjectsModel = new Projects(category);
    
    const projectSaved= await ProjectsModel.save();
    
    return projectSaved;
    
  }catch (error) {
    return HandleError(error);
  }
};


const update = async function (_id, data) {
  try {
    const project = await Projects.findById(_id);
  
    if (!project) {
      return HandleError(ErrorCode.PROJECT_DOES_NOT_EXISTS);
    }
  
    project.set(data);
  
    const projectUpdated = await project.save();
  
    return projectUpdated;
  
  
  } catch (error) {
  
    return HandleError(error);
  }
};

const  countData = async function(filter) {
  try {
    const count = Projects.count(filter);
    
    return count;
    
  }catch (error) {
    return HandleError(error);
  }
};



module.exports = {
  getAllProjects,
  create,
  update,
  countData
};