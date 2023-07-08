const signupRouter = require('express').Router();
const { validateSignup } = require('../middlewares/validation');
const { signup } = require('../controllers/users');

signupRouter.post('/', validateSignup, signup);

module.exports = signupRouter;
