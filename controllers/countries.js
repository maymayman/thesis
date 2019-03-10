const CountriesService = require('../service/countries');
const {validateCountry} = require('../helper/validation.js');

const getAll = async function (req, res) {
  try {
    const Countries = await CountriesService.getAll();
    
    return ResponeSuccess(req, res, {Countries});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const create = async function (req, res) {
  try {
    const data = req.body;
    const user = req.user;
    
    const {result, error } = await validateCountry(data, user);
  
    if (error) {
      return ResponeError(req, res, null, error);
    }
    
    const country = await CountriesService.create(result);
    
    return ResponeSuccess(req, res, {country});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

const update = async function (req, res) {
  try {
    const body = req.body;
    const user = req.user;
    const _id = req.params._id;
    
    const {result, error} = await validateCountry(body, user);
    
    if (error) {
      return ResponeError(req, res, null, error);
    }
    const dataUpdated = await CountriesService.update(_id, result);
  
    return ResponeSuccess(req, res, {dataUpdated});
    
  } catch (error) {
    
    return ResponeError(req, res, error, error.message);
  }
};

module.exports = {
  getAll,
  create,
  update
};