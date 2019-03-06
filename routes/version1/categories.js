const CategoriesHandle = require('express').Router();
const CategoriesController = require('../../controllers/categories');

CategoriesHandle.get('/', CategoriesController.getCategories);
CategoriesHandle.post('/', CategoriesController.createCategories);

module['exports'] = CategoriesHandle;