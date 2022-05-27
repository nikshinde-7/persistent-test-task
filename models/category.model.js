const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  categoryName: {
    required: true,
    type: String,
  },
  categoryDescription: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('Category', CategorySchema);
