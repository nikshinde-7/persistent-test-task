require('dotenv').config();
const { default: mongoose } = require('mongoose');
const { MONGODB_URL } = require('../constants');

const initializeDatabaseConnection = async () => {
  mongoose.connect(MONGODB_URL);
  const database = await mongoose.connection;

  database.on('error', (error) => {
    console.log(error);
  });

  database.once('connected', () => {
    console.log('Database Connected');
  });
};

module.exports = initializeDatabaseConnection;
