require('dotenv').config();

const { PORT = 3000, NODE_ENV, DB_ADDRESS } = process.env;
const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const { limiter } = require('./middlewares/limiter');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { DB_ADDRESS_DEV } = require('./utils/config');

const app = express();
app.use(helmet());
app.use(limiter);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use('/', indexRouter);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

mongoose.connect(NODE_ENV === 'production' ? DB_ADDRESS : DB_ADDRESS_DEV)
  .then(() => console.log('bitfilmsdb connected'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
