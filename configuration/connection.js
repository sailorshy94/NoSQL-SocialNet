const { connect, connection } = require('mongoose');

// database name = SocialNetwork
connect('mongodb://127.0.0.1:27017/socialNetwork');

module.exports = connection;