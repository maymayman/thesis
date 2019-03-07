const { Categories } = require('../models');

const getCate = async function() {
  try {
    
    const listCategories = await Categories.find({});
    
    return listCategories;
    
  }catch (error) {
    return HandleError(error);
  }
};

const createCate = async function(category) {
  try {
    const categoriesModel = new Categories(category);
    
    const categorySaved= await categoriesModel.save();
    
    return categorySaved;
    
  }catch (error) {
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
      
      const category = await Categories.findOne({name: data.name});
      if (category || (category && category._id)) {
        error = ErrorCode.CATEGORY_ALREADY_EXISTS;
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

module.exports = {
  getCate,
  createCate,
  validateCategory
};