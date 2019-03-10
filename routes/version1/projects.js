const ProjectsHandle = require('express').Router();
const ProjectsController = require('../../controllers/projects');

ProjectsHandle.get('/', ProjectsController.getAll);
ProjectsHandle.post('/', ProjectsController.create);
ProjectsHandle.put('/:_id', ProjectsController.update);

module['exports'] = ProjectsHandle;