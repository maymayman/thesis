const CommentHandle = require('express').Router();
const CommentController = require('../../controllers/comments');

CommentHandle.get('/:projectId', CommentController.getCmByProjectId);
CommentHandle.post('/:projectId/', CommentController.create);
CommentHandle.put('/:projectId/:commentId', CommentController.update);

module['exports'] = CommentHandle;
