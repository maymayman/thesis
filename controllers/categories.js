const categoriesService = require('../service/categories');

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
    let user = req.user;
    let data = req.body;
    const {result, error} = await categoriesService.validateCategory(data, user);
  
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const category = await categoriesService.createCate(result);
    
    return ResponeSuccess(req, res, {category});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

module.exports = {
  getCategories,
  createCategories,
};