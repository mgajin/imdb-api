const movieModel = require('@models')
const MovieService = require('./movies')

module.exports = new MovieService(movieModel)
