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
      
      const country = await Countries.findOne({name: data.name});
      if (country || (country && country._id)) {
        error = ErrorCode.COUNTRY_ALREADY_EXISTS;
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
  getCoun,
  createCoun,
  validateCountry
};