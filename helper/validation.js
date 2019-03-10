const { Countries } = require('../models');
const { Categories } = require('../models');
const { Projects } = require('../models');

const validateCountry = async function (data, user) {
  try {
    let error = null;
    let result = {};
    
    if (user.role != 'ADMIN') {
      error = ErrorCode.PERMISSION_DENIED;
    }
    
    if (!data.name) {
      error = ErrorCode.COUNTRY_INVALID;
    } else {
      if (data.action == 'create') {
        const country = await Countries.findOne({name: data.name});
        if (country || (country && country._id)) {
          error = ErrorCode.COUNTRY_ALREADY_EXISTS;
        }
      }
    }
    if (!error) {
      result = {
        name: data.name
      }
    }
    
    return {result, error};
    
  } catch (error) {
    
    return HandleError(error);
  }
};

const validateCategory = async function (data, user) {
  try {
    let error = null;
    let result = {};
    
    if (user.role != 'ADMIN') {
      error = ErrorCode.PERMISSION_DENIED;
    }
    
    if (!data.name) {
      error = ErrorCode.CATEGORY_INVALID;
    } else {
      if (data.action == 'create') {
        const category = await Categories.findOne({name: data.name});
        if (category || (category && category._id)) {
          error = ErrorCode.CATEGORY_ALREADY_EXISTS;
        }
      }
    }
    if (!error) {
      result = {
        name: data.name
      }
    }
    
    return {result, error};
    
  } catch (error) {
    
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
      const country = await Countries.findById({_id: data.countryId});
      if (!country) {
        error = ErrorCode.COUNTRY_DOES_NOT_EXISTS
      }
    }
    
    if (!data.categoryId) {
      error = ErrorCode.CATEGORY_INVALID;
    } else {
      const category = await Categories.findById({_id: data.categoryId});
      if (!category) {
        error = ErrorCode.CATEGORY_DOES_NOT_EXISTS
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
    
    return HandleError(error);
    
  }
};


module.exports = {
  validateCountry,
  validateCategory,
  validateProject
};