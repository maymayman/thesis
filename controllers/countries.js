const CountriesService = require('../service/countries');
const CountriesSchema = require('../models/schema/countries');

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
    
    if(!data || !user || user.role != 'ADMIN'){
      return ResponeError(req, res, null, ErrorCode.PERMISSION_DENIED);
    }
    
    const country = await CountriesService.createCoun(data);
    
    return ResponeSuccess(req, res, {country});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

module.exports = {
  getCountries,
  createCountries,
};