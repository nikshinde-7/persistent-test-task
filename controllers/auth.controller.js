const _ = require('lodash');
const passport = require('passport');
const constants = require('../constants/index');
const { createUserService } = require('../services/auth.service');

const {
  responseCodes,
  errorMessages,
} = constants;

exports.authenticateUser = async (req, res, next) => {
  try {
    passport.authenticate('local', (err, user, info) => {
      if (!_.isEmpty(user)) {
        req.logIn(user, async (error) => {
          if (error) {
            return next(error);
          }

          return res.status(responseCodes.SUCCESS).json({ data: { user } });
        });
      } else {
        res.status(responseCodes.ERROR).send({
          error: info.message,
        });
      }
    })(req, res, next);
  } catch (err) {
    res.status(responseCodes.ERROR).send({
      error:
        err.message || errorMessages.ERROR_OCCURRED,
    });
  }
};

exports.signUpUser = async (req, res, next) => {
  try {
    const { data, error } = await createUserService(req.body);
    console.log(data, error, '>>> Error ')
    passport.authenticate('local', (err, user, info) => {
      if (!_.isEmpty(user)) {
        req.logIn(user, async (error) => {
          if (error) {
            return next(error);
          }

          return res.status(responseCodes.SUCCESS).json({ data: { user } });
        });
      } else {
        res.status(responseCodes.ERROR).send({
          message: info.message,
        });
      }
    })(req, res, next);
  } catch (err) {
    res.status(responseCodes.ERROR).send({
      error:
        err.message || errorMessages.ERROR_OCCURRED,
    });
  }
};
