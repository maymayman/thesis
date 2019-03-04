const categoriesService = require('../service/categories');
const CategoryMD = connections.model('Categories');
const categorySchema = require('../models/schema/categories.js');


const getCategories = async function (req, res) {
  try {
    const categories = await categoriesService.getCate();
    
    return ResponeSuccess(req, res, {categories});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const createCategories = async function (req, res) {
  try {
    const data = req.body;
    const user = req.user;
  
    const {result, error} = validateCategory(data, user);
  
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const category = await categoriesService.createCate(result);
    
    return ResponeSuccess(req, res, {category});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const validateCategory = async function (data, user) {
  try {
    let error = null;
    
    if (user.role != 'ADMIN') {
      error = ErrorCode.PERMISSION_DENIED;
    }
    
    if (!data.title) {
      error = ErrorCode.PROJECT_TITLE_INVALID;
    }
    
    if (!data.name) {
      error = ErrorCode.CATEGORY_INVALID;
    } else {
      const category = await CategoryMD.findOne({name: data.name});
      if (category || category._id) {
        error = ErrorCode.CATEGORY_ALREADY_EXISTS;
      }
    }
    
    if (!error) {
      for (let key in categorySchema) {
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
  getCategories,
  createCategories,
};