const CountriesHandle = require('express').Router();
const CountriesController = require('../../controllers/countries');

CountriesHandle.get('/', CountriesController.getCountries);
CountriesHandle.post('/', CountriesController.createCountries);

module['exports'] = CountriesHandle;