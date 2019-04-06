const UploadHandle = require('express').Router();
const UploadController = require('../../controllers/upload');

UploadHandle.get('/', UploadController.upload);

module['exports'] = UploadHandle;
