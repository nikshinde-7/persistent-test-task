const express = require('express');
const {
  createCategory, findCategory, updateCategory, deleteCategory,
} = require('../controllers/category.controller');
const validator = require('../middleware/validator');

const router = express.Router();

/**
 * @swagger
 * /category/get-category:
 *  get:
 *    summary: Get Category
 *    description: This API will get all categories.
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/get-category', findCategory);

/**
 * @swagger
 * /category/create-category:
 *  post:
 *    summary: Create Category
 *    description: This API will create the new category.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *                 description: The category's name.
 *                 example: Paid
 *               categoryDescription:
 *                 type: string
 *                 description: The category's Description.
 *                 example: Something related to category
 *    responses:
 *      200:
 *        description: Logged in
 */
router.post('/create-category', validator('categorySchema'), createCategory);

/**
 * @swagger
 * /category/update-category:
 *  post:
 *    summary: Update Category
 *    description: This API will create the new category.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryId:
 *                 type: string
 *                 description: The category's Id.
 *                 example: Paid
 *               categoryName:
 *                 type: string
 *                 description: The category's name.
 *                 example: Paid
 *               categoryDescription:
 *                 type: string
 *                 description: The category's Description.
 *                 example: Something related to category
 *    responses:
 *      200:
 *        description: Logged in
 */
router.post('/update-category', validator('updateCategorySchema'), updateCategory);

/**
 * @swagger
 * /category/delete-category:
 *  delete:
 *    summary: Delete the category
 *    description: This API will delete provided category.
 *    parameters:
 *      - in: query
 *        name: categoryId
 *        required: true
 *        description: Id of the category to be retrieved.
 *        example: 6290ae2ecadff67564dd845a
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Deleted
 */
router.delete('/delete-category', deleteCategory);

module.exports = router;
