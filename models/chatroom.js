const db = require('../db/config');

const Chatroom = {};

Chatroom.findAll = () => {
  return db.query(`SELECT * FROM chatroom ORDER BY id DESC`);
};

// Chatroom.findById = id => {
//   return db.oneOrNone(
//     `
//     SELECT * FROM chatroom
//     WHERE id = $1
//   `,
//     [id]
//   );
// };

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

// Chatroom.update = (chatroom, id) => {
//   return db.one(
//     `
//     UPDATE chatroom SET
//       flavor = $1,
//       description = $2,
//       rating = $3,
//       url = $4
//     WHERE id = $5
//     RETURNING *
//   `,
//     [chatroom.flavor, chatroom.description, chatroom.rating, chatroom.url, id]
//   );
// };

// Chatroom.destroy = id => {
//   return db.none(
//     `
//     DELETE FROM chatroom
//     WHERE id = $1
//   `,
//     [id]
//   );
// };

module.exports = Chatroom;
