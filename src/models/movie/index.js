const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    released: {
        type: String,
        required: true,
    },
    genre: {
        type: Array,
        required: true,
    },
    plot: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
    production: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Movie', movieSchema)
