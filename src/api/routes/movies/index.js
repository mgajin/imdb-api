const router = require('express').Router()

router.get('/', async (req, res) => {
    const query = req.query
    let movies

    if (query.genre) {
        movies = []
    } else if (query.title) {
        movies = []
    } else {
        movies = []
    }

    if (!movies) {
        return res
            .status(404)
            .json({ success: false, message: 'movies not found' })
    }

    res.status(200).json({ success: true, movies: movies })
})

router.get('/:movie', async (req, res) => {
    const id = req.params.movie

    const movie = {} // get movie by id from service

    if (!movie) {
        return res.status(404).json({
            success: false,
            message: `movie with ID: ${id} not found`,
        })
    }

    res.status(200).json({ success: true, movie: movie })
})

router.post('/', async (req, res) => {
    // validate body
    const { title, genre, poster, rating } = req.body

    const movie = {
        title: title,
        genre: genre,
        poster: poster,
        rating: rating,
    }

    // save to database

    if (!movie) {
        return res
            .status(501)
            .json({ success: false, message: 'could not create movie' })
    }

    res.status(201).json({ success: false, movie: movie })
})

module.exports = router
