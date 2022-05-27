const _ = require('lodash');
const { findUserByEmailService } = require('../services/auth.service');
const constants = require('../constants/index');

const {
  errorMessages,
} = constants;

exports.passportCallback = async (req, email, password, done) => {
  try {
    console.log(email, password, '>>>>>>>>>>>>> ');
    const { data } = await findUserByEmailService(email, password);

    console.log(email, password, data, '>>>>>>>>>>>>> ');
    if (!_.isEmpty(data)) {
      done(null, data);
    } else {
      done(null, {}, { message: errorMessages.WRONG_CREDENTIALS });
    }
  } catch (error) {
    done(null, {}, { message: error });
  }
};
