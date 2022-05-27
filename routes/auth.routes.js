const express = require('express');
const { authenticateUser, signUpUser } = require('../controllers/auth.controller');

const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: User Login
 *    description: This API will validate the user based on provided credentials.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: Something super secret
 *    responses:
 *      200:
 *        description: Logged in
 */
router.post('/login', authenticateUser);

/**
 * @swagger
 * /auth/signup:
 *  post:
 *    summary: User Signup
 *    description: This API will register & validate the user based on provided credentials.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne@abc.com
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: Something super secret
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *    responses:
 *      200:
 *        description: Logged in
 */
router.post('/signup', signUpUser);

module.exports = router;
