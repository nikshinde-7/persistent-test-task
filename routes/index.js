const router = require('express').Router();
const categoryRouter = require('./category.routes');
const emailCategoryRouter = require('./email-category.routes');
const authRouter = require('./auth.routes');
const isAuthenticated = require('../middleware');

router.use('/v1/auth', authRouter);
router.use('/v1/category', isAuthenticated, categoryRouter);
router.use('/v1/email-category', isAuthenticated, emailCategoryRouter);

module.exports = router;
