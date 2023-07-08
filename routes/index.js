const indexRouter = require('express').Router();
const signupRouter = require('./signup');
const signinRouter = require('./signin');
const signoutRouter = require('./signout');
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const notFoundPage = require('../controllers/notFoundPage');

indexRouter.use('/signup', signupRouter);
indexRouter.use('/signin', signinRouter);
indexRouter.use('/signout', signoutRouter);
indexRouter.use('/users', auth, userRouter);
indexRouter.use('/movies', auth, movieRouter);
indexRouter.all('*', notFoundPage);

module.exports = indexRouter;
