const Router = require('express').Router();
const UserController = require('../../controllers/users');
const authAdmin = require('../../middleware/authAdmin');

Router.post('/', UserController.create);
Router.post('/login', UserController.login);
Router.get('/:id', UserController.findById);
Router.get('/', UserController.find);
Router.put('/:id', UserController.update);
Router.delete('/:id', authAdmin, UserController.delete);

module['exports'] = Router;