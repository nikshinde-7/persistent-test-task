const emailCategorySchema = require('./email-category.validator');
const userSchema = require('./user.validator');
const categorySchema = require('./category.validator');
const updateCategorySchema = require('./update-category.validator');
const updateEmailCategorySchema = require('./update-email-category.validator');

module.exports = {
  emailCategorySchema, userSchema, categorySchema, updateCategorySchema, updateEmailCategorySchema,
};
