const Joi = require('joi');

const emailCategorySchema = Joi.object({
  categoryId: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
});

module.exports = emailCategorySchema;
