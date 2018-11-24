\c chatroom;

CREATE TABLE IF NOT EXISTS chatroom (
  id SERIAL PRIMARY KEY,
  roomName VARCHAR(255),
  waitingId VARCHAR(255),
  users VARCHAR []
);
