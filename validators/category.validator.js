const Joi = require('joi');

const categorySchema = Joi.object({
  categoryName: Joi.string().lowercase().required(),
  categoryDescription: Joi.string().max(20).required(),
});

module.exports = categorySchema;
