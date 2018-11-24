const Chatroom = require('../models/chatroom');

const chatroomController = {};

chatroomController.index = (req, res) => {
  Chatroom.findAll()
    .then(chatrooms => {
      res.json({
        message: 'ok',
        data: chatrooms,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

// chatroomController.show = (req, res) => {
//   Chatroom.findById(req.params.id)
//     .then(chatroom => {
//       res.json({
//         message: 'ok',
//         data: chatroom,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// };

chatroomController.create = (req, res) => {
  Chatroom.create({
    roomname: req.body.roomname,
    waitingid: req.body.waitingid,
    users: req.body.users
  })
    .then(chatroom => {
      res.json({
        message: 'ok',
        data: chatroom,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

// chatroomController.update = (req, res) => {
//   Chatroom.update(
//     {
//       flavor: req.body.flavor,
//       description: req.body.description,
//       rating: req.body.rating,
//       url: req.body.url,
//     },
//     req.params.id,
//   )
//     .then(chatroom => {
//       res.json({
//         message: 'ok',
//         data: chatroom,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// };

// chatroomController.destroy = (req, res) => {
//   Chatroom.destroy(req.params.id)
//     .then(chatroom => {
//       res.json({
//         message: 'ok',
//         data: chatroom,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// };

module.exports = chatroomController;
