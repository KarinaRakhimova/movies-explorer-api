const ForbiddenError = require('../errors/forbiddenError');
const Movie = require('../models/movies');
const { MOVIE_DELETED_MESSAGE } = require('../utils/constants');

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
  Movie.findById(req.params._id)
    .orFail()
    .populate('owner')
    .then((movie) => {
      const owner = movie.owner._id.toString();
      if (owner !== req.user._id) {
        throw new ForbiddenError();
      }
      return movie.deleteOne({ _id: req.params._id });
    })
    .then(() => res.send({ message: MOVIE_DELETED_MESSAGE }))
    .catch(next);
};

module.exports = {
  getAllMovies,
  createMovie,
  deleteMovie,
};
