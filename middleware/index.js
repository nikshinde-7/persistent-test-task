const constants = require('../constants/index');

const {
  responseCodes,
  errorMessages,
} = constants;

const isAuthenticated = (req, res, next) => {
  const { user } = req;

  if (user) {
    next();
  } else {
    res.status(responseCodes.UNAUTHORIZED).send({
      message: errorMessages.USER_UNAUTHORIZED,
    });
  }
};

module.exports = isAuthenticated;
