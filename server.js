const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
// app.use(express.static('public'));
app.use(express.static('p4/build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()) ;

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



const chatroom = require('./routes/routes');
app.use('/videoPage', chatroom);

// const welcome = require('./routes/routes');
// app.use('/Welcome', welcome);

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Endpoint not found!',
  });
});
