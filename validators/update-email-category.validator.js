const Joi = require('joi');

const updateEmailCategorySchema = Joi.object({
  categoryId: Joi.string().required(),
  email: Joi.string().email().required(),
});

module.exports = updateEmailCategorySchema;
