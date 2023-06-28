const movieRouter = require('express').Router();
const { validateCreateMovie, validateDeleteMovie } = require('../middlewares/validation');
const {
  getAllMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/', getAllMovies);
movieRouter.post('/', validateCreateMovie, createMovie);
movieRouter.delete('/:movieId', validateDeleteMovie, deleteMovie);

module.exports = movieRouter;
