require('dotenv').config();

const successMessages = {
  USER_IS_DELETED: 'User is Deleted',
  USER_IS_UPDATED: 'User is Updated',
  USER_IS_LOGGED_IN: 'User is Logged In',
};

const responseCodes = {
  SUCCESS: 200,
  ERROR: 500,
  CREATED: 201,
  ALREADY_EXISTS: 409,
  DELETED: 204,
  UNAUTHORIZED: 401,
};

const errorMessages = {
  EMAIL_ALREADY_EXISTS: 'Email Already exists',
  USER_NOT_EXISTS: 'User is not Exists',
  ERROR_OCCURRED: 'Something went wrong',
  USER_UNAUTHORIZED: 'User is not authorized',
  WRONG_CREDENTIALS: 'Wrong Credentials, Please try again',
  RECORD_NOT_FOUND: 'Record not found',
};

const MONGODB_URL = process.env.MONGODB_URL;
const SECRET_KEY = process.env.SECRET_KEY;
const SESSIONEXPIRATIONTIME = process.env.SESSIONEXPIRATIONTIME;
const PORT = process.env.PORT;
const APP_PUBLICURL = process.env.APP_PUBLICURL;

module.exports = {
  responseCodes,
  errorMessages,
  successMessages,
  MONGODB_URL,
  SECRET_KEY,
  SESSIONEXPIRATIONTIME,
  PORT,
  APP_PUBLICURL,
};
