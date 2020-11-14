const movieModel = require('@model/movies')
const MovieService = require('./movies')

module.exports = new MovieService(movieModel)
