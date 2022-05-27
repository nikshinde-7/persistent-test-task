const constants = require('../constants/index');
const {
  createEmailForCategoryService,
  deleteEmailCategoryService,
  findEmailCategoriesByIdService,
  updateEmailCategoryService,
} = require('../services/email-category.service');

const {
  responseCodes,
  errorMessages,
} = constants;

exports.findEmailCategory = async (req, res) => {
  try {
    const { error, data } = await findEmailCategoriesByIdService(req.query.categoryId);
    if (error) {
      return res.status(responseCodes.ERROR).send({ error: data });
    }
    return res.status(responseCodes.SUCCESS).send({ data });
  } catch (err) {
    return res.status(responseCodes.ERROR).send({
      error:
        err.message || errorMessages.ERROR_OCCURRED,
    });
  }
};

exports.createEmailForCategory = async (req, res) => {
  try {
    const { error, data } = await createEmailForCategoryService(req.body);

    if (error) {
      return res.status(responseCodes.ERROR).send({ error: data });
    }

    return res.status(responseCodes.CREATED).send({ data });
  } catch (err) {
    return res.status(responseCodes.ERROR).send({
      error:
        err.message || errorMessages.ERROR_OCCURRED,
    });
  }
};

exports.deleteEmailForCategory = async (req, res) => {
  try {
    const { error, data } = await deleteEmailCategoryService(req.query.categoryId);
    if (error) {
      return res.status(responseCodes.ERROR).send({ error: data });
    }

    return res.status(responseCodes.CREATED).send({ data });
  } catch (err) {
    return res.status(responseCodes.ERROR).send({
      error:
        err.message || errorMessages.ERROR_OCCURRED,
    });
  }
};

exports.updateEmailForCategory = async (req, res) => {
  try {
    const { error, data } = await updateEmailCategoryService(req.body);
    if (error) {
      return res.status(responseCodes.ERROR).send({ error: data });
    }

    return res.status(responseCodes.SUCCESS).send({ data });
  } catch (err) {
    return res.status(responseCodes.ERROR).send({
      message:
        err.message || errorMessages.ERROR_OCCURRED,
    });
  }
};
