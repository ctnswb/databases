var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message) {
      console.log('Message:', message);
      db.dbConnection.query('INSERT INTO messages () VALUES ()');
      db.dbConnection.query('INSERT INTO messages () VALUES ()');


      if ( db.dbConnection.query('SELECT NOT EXISTS(SELECT id FROM users WHERE name = message.username)') ) {

      }

      // check if user/room already exists
        // if doesn't exist
          // insert user/roomname into user/room table.name
        // get room id & get name id
        // insert information into messages table


    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

