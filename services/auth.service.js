const _ = require('lodash');
const User = require('../models/user.model');
/**
 * @param  {} createUserObject
 * @returns err<true | false>, data<errorMessage | actual data>
 */
exports.createUserService = async (createUserObject) => {
  try {
    const { username, password, name } = createUserObject;
    const userRecord = await User.findOne({ email: username }).exec();

    if (!_.isEmpty(userRecord)) {
      return { error: true, data: 'User already exists' };
    }

    return { error: false, data: await User.create({ email: username, name, password }) };
  } catch (err) {
    return { error: true, data: err.message };
  }
};
/**
 * @param  {} email
 * @param  {} password
 * @returns err <true | false>, data <errorMessage | actual data>
 */
exports.findUserByEmailService = async (email, password) => {
  try {
    if (password) {
      return { error: false, data: await User.findOne({ email, password }).exec() };
    }
    return { error: false, data: await User.findOne({ email }).exec() };
  } catch (err) {
    return { error: true, data: err.message };
  }
};
