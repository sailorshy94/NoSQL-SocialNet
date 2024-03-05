const { connect, connection } = require('mongoose');

// TODO: add in db name when have it
connect('mongodb://127.0.0.1:27017/db_name');

module.exports = connection;