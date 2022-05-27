const express = require('express');
const {
  createEmailForCategory, deleteEmailForCategory, findEmailCategory, updateEmailForCategory,
} = require('../controllers/email-category.controller');
const validate = require('../middleware/validator');

const router = express.Router();

/**
 * @swagger
 * /email-category/get-email-category:
 *  get:
 *    summary: Fetch the list of Categories against the emails
 *    description: This API will fetch all the categories with respective emails.
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
 *        description: Fetched
 */
router.get('/get-email-category', findEmailCategory);

/**
 * @swagger
 * /email-category/add-email-category:
 *  post:
 *    summary: Add Category
 *    description: This API will add the email against category.
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
 *                 example: 628fbebfd89f2b91519103ce
 *               email:
 *                 type: string
 *                 description: The category's name.
 *                 example: john@abc.com
 *    responses:
 *      200:
 *        description: Added the new email against category
 */
router.post('/add-email-category', validate('emailCategorySchema'), createEmailForCategory);

/**
 * @swagger
 * /email-category/update-email-category:
 *  post:
 *    summary: Update Email Category
 *    description: This API will update the email against category.
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
 *                 example: 628fbebfd89f2b91519103ce
 *               email:
 *                 type: string
 *                 description: The category's name.
 *                 example: john@abc.com
 *    responses:
 *      200:
 *        description: Updated record
 */
router.post('/update-email-category', validate('updateEmailCategorySchema'), updateEmailForCategory);

/**
 * @swagger
 * /email-category/delete-email-category:
 *  delete:
 *    summary: Delete the category along with email
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
router.delete('/delete-email-category', deleteEmailForCategory);

module.exports = router;
