var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

//response function


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('INSIDE THE CONTROLLER METHOD');
      res.set(headers);
      res.status(200);
      models.messages.get(req, res);
      //res.send(models.messages.get());
      //res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //console.log('REQUEST BODY:', req.body);
      res.set(headers);
      res.status(201);
      models.messages.post(req.body);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      res.set(headers);
      res.status(201);
      //add data to database
      res.end();
    }
  }
};


