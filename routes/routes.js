const express = require('express');
const chatroomRouter = express.Router();

const chatroomController = require('../controllers/chatroom-controller');

chatroomRouter.get('/', chatroomController.index);
chatroomRouter.post('/', chatroomController.create);

// chatroomRouter.get('/:id', chatroomController.show);
// chatroomRouter.put('/:id', chatroomController.update);
// chatroomRouter.delete('/:id', chatroomController.destroy);

module.exports = chatroomRouter;
