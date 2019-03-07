const { Projects } = require('../models');
const { Countries } = require('../models');
const { Categories } = require('../models');

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

const validateProject = async function (data, user) {
  try {
    let error = null;
    let result = {};
    
    if (user.role != 'COMPANY' || !user.information || !user.information.nameCompany) {
      error = ErrorCode.USER_COMPANY_INVALID;
    }
    
    if (!data.title) {
      error = ErrorCode.PROJECT_TITLE_INVALID;
    }
    
    if (!data.countryId) {
      error = ErrorCode.COUNTRY_INVALID;
    } else {
      const country = await Countries.findOne({_id: data.countryId});
      if (!country || !country._id) {
        error = ErrorCode.COUNTRY_INVALID;
      }
    }
    
    if (!data.categoryId) {
      error = ErrorCode.CATEGORY_INVALID;
    } else {
      const category = await Categories.findOne({_id: data.categoryId});
      if (!category || !category._id) {
        error = ErrorCode.CATEGORY_INVALID;
      }
    }
    
    if (!data.personResponsible){
      data.personResponsible = {};
    }
    
    if (!error) {
      result = {
        title: data.title,
        countryId: data.countryId,
        categoryId : data.categoryId,
        about : data.about || '',
        personResponsible: {
          firstName: data.personResponsible.firstName || '',
          lastName: data.personResponsible.lastName || '',
          birthday: data.personResponsible.birthday || '',
          phone: data.personResponsible.phone || ''
        },
        donationsCount: data.donationsCount || 0,
        amount: data.amount || 0,
      }
    }
    
    return {result, error};
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};


module.exports = {
  getPro,
  createPro,
  validateProject
};