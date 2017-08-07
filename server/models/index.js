var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message) {
      console.log('Message:', message);

      db.dbConnection.query('INSERT INTO messages (username, roomname, message_text) VALUES ("'+message.username+'", "'+message.roomname+'", "'+message.text+'")', function(error, results, fields) {
        console.log('error:', error);
        console.log('queried with results:', results);
      });


    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

