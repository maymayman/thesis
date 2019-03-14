const { Countries } = require('../models');
const { Categories } = require('../models');
const { Projects } = require('../models');
const { Comments } = require('../models');

const CalculateAmount = function(project, percentDonate){
  try {
    const totalPercent = project.percent;
    const totalAmount = project.amount;
    const onePercent = totalAmount/totalPercent;
    
    return onePercent * percentDonate;
    
  }catch (error) {
    
    return HandleError(error);
  }
};

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
        percent: data.percent || 0,
      }
    }
    
    return {result, error};
    
  } catch (error) {
    
    return HandleError(error);
    
  }
};

const validateDonate = async function (data, user) {
  try {
    let error = null;
    let result = {};
    let project = {};
    
    if (user.role != 'GUEST') {
      error = ErrorCode.USER_ROLE_INVALID;
    }
    
    if (!data.projectId) {
      error = ErrorCode.PROJECT_TITLE_INVALID;
    }else {
      project = await Projects.findById({_id: data.projectId});
      if (!project) {
        error = ErrorCode.PROJECT_DOES_NOT_EXISTS
      }
    }
    
    if (!data.percent) {
      error = ErrorCode.MISSING_PERCENT_DONATE;
    } else {
      if ((data.percent > project.percent) || (data.percent < project.minPercentSell)){
        error = ErrorCode.PERCENT_DONATE_INVALID;
      }
    }
    
    if (!error) {
      let amountCalculated = await CalculateAmount(project, data.percent);
      result = {
        userId: user._id,
        projectId: data.projectId,
        percent : data.percent,
        amount : amountCalculated ,
        note: data.note || '',
      }
    }
    
    return {result, error};
    
  } catch (error) {
    
    return HandleError(error);
    
  }
};

const validateComment = async function (commentId, projectId, data, user) {
  try {
    let error = null;
    let result = {};
    let project = {};
    let comment = {};
    
    if (user.role != "GUEST" && user.role != "COMPANY") {
      error = ErrorCode.USER_ROLE_INVALID;
    }
    
    if (data.action == 'update'){
      if (!commentId){
        error = ErrorCode.COMMENT_NO_EXITS;
      }else {
        comment = await Comments.findById({_id: commentId});
        if (!comment) {
          error = ErrorCode.COMMENT_NO_EXITS
        }
      }
    }
    
    if (!projectId) {
      error = ErrorCode.PROJECT_TITLE_INVALID;
    }else {
      project = await Projects.findById({_id: projectId});
      if (!project) {
        error = ErrorCode.PROJECT_DOES_NOT_EXISTS
      }
    }
    
    if (!data.type) {
      error = ErrorCode.TYPE_COMMENT_INVALID;
    } else {
      if (data.type == 'REPLY'){
        if (!data.parentId){
          error = ErrorCode.TYPE_COMMENT_INVALID;
        }else {
          comment = await Comments.findById({_id: data.parentId});
          if (!comment) {
            error = ErrorCode.COMMENT_NO_EXITS;
          }
        }
      }
    }
    
    if (!error) {
      result = {
        user: user._id,
        project: projectId,
        parentId : data.parentId,
        type: data.type,
        content: data.content || '',
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
  validateProject,
  validateDonate,
  validateComment
};