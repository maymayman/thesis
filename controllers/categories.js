const categoriesService = require('../service/categories');
const categoriesSchema = require('../models/schema/categories');

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
    
    if(!data || !user || user.role != 'ADMIN'){
      return ResponeError(req, res, null, ErrorCode.PERMISSION_DENIED);
    }
    
    const category = await categoriesService.createCate(data);
    
    return ResponeSuccess(req, res, {category});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

module.exports = {
  getCategories,
  createCategories,
};