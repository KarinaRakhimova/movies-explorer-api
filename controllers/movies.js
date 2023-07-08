const ForbiddenError = require('../errors/forbiddenError');
const Movie = require('../models/movies');
const { FORBIDDEN_ERROR_MESSAGE } = require('../utils/constants');

const getAllMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  Movie.create({ ...req.body, owner: req.user._id })
    .then((movie) => res.send(movie))
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  Movie.findOne({ movieId: req.params.movieId })
    .orFail()
    .populate('owner')
    .then((movie) => {
      const owner = movie.owner._id.toString();
      if (owner !== req.user._id) {
        throw new ForbiddenError(FORBIDDEN_ERROR_MESSAGE);
      } return movie.deleteOne();
    })
    .then((movie) => res.send(movie))
    .catch(next);
};

module.exports = {
  getAllMovies,
  createMovie,
  deleteMovie,
};
