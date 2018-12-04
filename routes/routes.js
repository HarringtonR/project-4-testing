const express = require('express');
const chatroomRouter = express.Router();

const chatroomController = require('../controllers/chatroom-controller');

chatroomRouter.get('/', chatroomController.index);
chatroomRouter.post('/', chatroomController.create);


module.exports = chatroomRouter;
