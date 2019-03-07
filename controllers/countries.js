const CountriesService = require('../service/countries');

const getCountries = async function (req, res) {
  try {
    const Countries = await CountriesService.getCoun();
    
    return ResponeSuccess(req, res, {Countries});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const createCountries = async function (req, res) {
  try {
    const data = req.body;
    const user = req.user;
    
    const {result, error } = await CountriesService.validateCountry(data, user);
  
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const country = await CountriesService.createCoun(result);
    
    return ResponeSuccess(req, res, {country});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

module.exports = {
  getCountries,
  createCountries,
};