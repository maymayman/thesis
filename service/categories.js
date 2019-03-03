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

module.exports = {
  getCate,
  createCate,
};