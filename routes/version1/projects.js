const ProjectsHandle = require('express').Router();
const ProjectsController = require('../../controllers/projects');

ProjectsHandle.get('/', ProjectsController.getProjects);
ProjectsHandle.post('/', ProjectsController.createProjects);

module['exports'] = ProjectsHandle;