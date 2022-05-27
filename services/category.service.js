const _ = require('lodash');
const constants = require('../constants/index');
const Category = require('../models/category.model');
const EmailCategory = require('../models/email-category.model');

const { errorMessages } = constants;

/**
 * @param  {}
 * @returns err<true | false>, data<errorMessage | actual data>
 */
exports.findAllCategoriesService = async () => {
  try {
    return { error: false, data: await Category.find() };
  } catch (err) {
    return { error: true, data: err.message };
  }
};

/**
 * @param  {} createCategoryObject
 * @returns error<true | false>, data<errorMessage | actual data>
 */
exports.createCategoryService = async (createCategoryObject) => {
  try {
    return { error: false, data: await Category.create(createCategoryObject) };
  } catch (err) {
    return { error: true, data: err.message };
  }
};

/**
 * @param  {} updateCategoryObject
 * @returns err<true | false>, data<errorMessage | actual data>
 */
exports.updateCategoryService = async (updateCategoryObject) => {
  try {
    const { categoryName, categoryDescription, categoryId } = updateCategoryObject;

    const categoryDocument = await Category.findById(categoryId);

    if (!_.isEmpty(categoryDocument)) {
      categoryDocument.categoryName = categoryName;
      categoryDocument.categoryDescription = categoryDescription;

      await categoryDocument.save();
      return { error: false, data: categoryDocument };
    }
    return { error: true, data: errorMessages.RECORD_NOT_FOUND };
  } catch (err) {
    return { error: true, data: err.message };
  }
};

/**
 * @param  {} categoryId
 * @returns err<true | false>, data<errorMessage | actual data>
 */
exports.deleteCategoryService = async (categoryId) => {
  try {

    await EmailCategory.deleteMany({ categoryId });
    await Category.deleteOne({ _id: categoryId })

    return { error: false, data: [] };
  } catch (err) {
    return { error: true, data: err.message };
  }
};
