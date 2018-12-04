const db = require('../db/config');

const Chatroom = {};

Chatroom.findAll = () => {
  return db.query(`SELECT * FROM chatroom ORDER BY id DESC`);
};


Chatroom.create = chatroom => {
  return db.one(
    `
    INSERT INTO chatroom
    (roomname, waitingid, users)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [chatroom.roomname, chatroom.waitingid, chatroom.users]
  );
};

module.exports = Chatroom;
