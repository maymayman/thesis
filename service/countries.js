const { Countries } = require('../models');

const getCoun = async function() {
  try {
    
    const listCountries = await Countries.find({});
    
    return listCountries;
    
  }catch (error) {
    return HandleError(error);
  }
};

const createCoun = async function(country) {
  try {
    const CountriesModel = new Countries(country);
    
    const countrySaved= await CountriesModel.save();
    
    return countrySaved;
    
  }catch (error) {
    return HandleError(error);
  }
};

module.exports = {
  getCoun,
  createCoun,
};