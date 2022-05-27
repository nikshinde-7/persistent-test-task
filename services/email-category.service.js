const _ = require('lodash');
const EmailCategory = require('../models/email-category.model');
const Category = require('../models/category.model');
const constants = require('../constants/index');

const {
  errorMessages,
} = constants;

/**
 * @param  {} categoryId
 * @returns err<true | false>, data<errorMessage | actual data>
 */
exports.findEmailCategoriesByIdService = async (categoryId) => {
  try {
    const categoriesRecord = await Category.findById(categoryId);
    const emailCategoryRecord = await EmailCategory.find({ categoryId });

    if (!_.isEmpty(categoriesRecord)) {
      const emailsList = !_.isEmpty(emailCategoryRecord)
        ? emailCategoryRecord.map((el) => _.get(el, 'email')) : [];

      const response = {
        categoryName: _.get(categoriesRecord, 'categoryName'),
        categoryId,
        emails: emailsList,
      };
      return { error: false, data: response };
    }
    return { error: true, data: errorMessages.RECORD_NOT_FOUND };
  } catch (err) {
    return { error: true, data: err.message };
  }
};

exports.createEmailForCategoryService = async (createCategoryObject) => {
  try {
    const emailCategory = await EmailCategory.findOne(createCategoryObject).exec();

    if (!_.isEmpty(emailCategory)) {
      return { error: true, data: 'Email already exists' };
    }

    return { error: false, data: await EmailCategory.create(createCategoryObject) };
  } catch (err) {
    return { error: true, data: err.message };
  }
};

/**
 * @param  {} categoryId
 * @param  {categoryId}}
 * @returns err<true | false>, data<errorMessage | actual data>
 */
exports.deleteEmailCategoryService = async (categoryId) => {
  try {
    return { error: false, data: await EmailCategory.deleteOne({ _id: categoryId }) };
  } catch (err) {
    return { error: true, data: err.message };
  }
};

/**
 * @param  {} updateCategoryObject
 * @param  {updateCategoryObject}
 * @returns error<true | false>, data<errorMessage | actual data>
 */
exports.updateEmailCategoryService = async (updateCategoryObject) => {
  try {
    const { categoryId, email } = updateCategoryObject;
    const categoryDocument = await EmailCategory.findById(categoryId);

    if (!_.isEmpty(categoryDocument)) {
      categoryDocument.email = email;
      await categoryDocument.save();
      return { error: false, data: categoryDocument };
    }

    return { error: true, data: errorMessages.RECORD_NOT_FOUND };
  } catch (error) {
    return { error: true, data: error.message };
  }
};
