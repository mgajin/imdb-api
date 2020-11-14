const router = require('express').Router()
const movieService = require('@services')

router.get('/', async (req, res) => {
    const query = req.query
    let movies

    if (query.genre) {
        movies = await movieService.getMoviesByGenre(query.genre)
    } else if (query.title) {
        movies = await movieService.getMoviesByTitle(query.title)
    } else {
        movies = await movieService.getAllMovies()
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

    const movie = await movieService.getMovieById(id)

    if (!movie) {
        return res.status(404).json({
            success: false,
            message: `movie with ID: ${id} not found`,
        })
    }

    res.status(200).json({ success: true, movie: movie })
})

module.exports = router
