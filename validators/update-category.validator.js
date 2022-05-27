const Joi = require('joi');

const updateCategorySchema = Joi.object({
  categoryId: Joi.string().required(),
  categoryName: Joi.string().lowercase().required(),
  categoryDescription: Joi.string().max(20).required(),
});

module.exports = updateCategorySchema;
