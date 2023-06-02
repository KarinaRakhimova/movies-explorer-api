const CREATED_CODE = 201;
const BAD_REQUEST_ERROR_CODE = 400;
const UNAUTHORIZED_ERROR_CODE = 401;
const FORBIDDEN_ERROR_CODE = 403;
const NOTFOUND_ERROR_CODE = 404;
const DUPLICATE_ERROR_CODE = 409;
const DEFAULT_ERROR_CODE = 500;
const ALLOWED_CORS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://localhost:3000',
  'https://localhost:3001',
];

const UNAUTHORIZED_ERROR_MESSAGE = 'Ошибка авторизации';
const FORBIDDEN_ERROR_MESSAGE = 'У вас нет доступа';
const DUPLICATE_ERROR_MESSAGE = 'Пользователь с данным email уже зарегистрирован';
const EMPTY_FIELD_MESSAGE = 'Поле должно быть заполнено';
const INCORRECT_FIELD_MESSAGE = 'Поле заполнено некорректно';
const NOTFOUND_ERROR_MESSAGE = 'Страница не найдена';
const MINLENGTH_ERROR_MESSAGE = 'Недостаточное количество символов';
const MAXLENGTH_ERROR_MESSAGE = 'Слишком много символов';
const SIGNIN_MESSAGE = 'Вы авторизованы';
const SIGNOUT_MESSAGE = 'Вы вышли из учетной записи';
const MOVIE_DELETED_MESSAGE = 'Фильм успешно удален';

module.exports = {
  CREATED_CODE,
  BAD_REQUEST_ERROR_CODE,
  UNAUTHORIZED_ERROR_CODE,
  UNAUTHORIZED_ERROR_MESSAGE,
  FORBIDDEN_ERROR_CODE,
  FORBIDDEN_ERROR_MESSAGE,
  DEFAULT_ERROR_CODE,
  NOTFOUND_ERROR_CODE,
  NOTFOUND_ERROR_MESSAGE,
  DUPLICATE_ERROR_CODE,
  DUPLICATE_ERROR_MESSAGE,
  ALLOWED_CORS,
  EMPTY_FIELD_MESSAGE,
  INCORRECT_FIELD_MESSAGE,
  MINLENGTH_ERROR_MESSAGE,
  MAXLENGTH_ERROR_MESSAGE,
  SIGNIN_MESSAGE,
  SIGNOUT_MESSAGE,
  MOVIE_DELETED_MESSAGE,
};
