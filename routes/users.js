const userRouter = require('express').Router();
const { validateUpdateUser } = require('../middlewares/validation');
const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

userRouter.get('/me', getUserInfo);
userRouter.patch('/me', validateUpdateUser, updateUserInfo);

module.exports = userRouter;
