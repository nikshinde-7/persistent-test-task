const router = require('express').Router();
const categoryRouter = require('./category.routes');
const emailCategoryRouter = require('./email-category.routes');
const authRouter = require('./auth.routes');
const isAuthenticated = require('../middleware');

router.get('/v1', (req, res) => {
  res.send('Welcome to the API. Here is the link to the <a href="http://139.59.34.28:3000/api">documentation</a>');
});
router.use('/v1/auth', authRouter);
router.use('/v1/category', isAuthenticated, categoryRouter);
router.use('/v1/email-category', isAuthenticated, emailCategoryRouter);

module.exports = router;
