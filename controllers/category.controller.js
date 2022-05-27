const constants = require('../constants/index');
const {
  findAllCategoriesService, createCategoryService, updateCategoryService, deleteCategoryService,
} = require('../services/category.service');

const {
  responseCodes,
  errorMessages,
} = constants;

exports.findCategory = async (req, res) => {
  try {
    const { error, data } = await findAllCategoriesService();
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

exports.createCategory = async (req, res) => {
  try {
    const { error, data } = await createCategoryService(req.body);
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

exports.updateCategory = async (req, res) => {
  try {
    const { error, data } = await updateCategoryService(req.body);
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

exports.deleteCategory = async (req, res) => {
  try {
    const { error, data } = await deleteCategoryService(req.query.categoryId);
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
