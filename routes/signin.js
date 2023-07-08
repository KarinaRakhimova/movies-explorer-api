const signinRouter = require('express').Router();
const { validateSignin } = require('../middlewares/validation');
const { signin } = require('../controllers/users');

signinRouter.post('/', validateSignin, signin);

module.exports = signinRouter;
