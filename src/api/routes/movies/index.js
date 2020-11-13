const router = require('express').Router()

router.get('/', async (req, res) => {
    res.send('Get all movies')
})

router.get('/:movie', async (req, res) => {
    res.send('Get single movie')
})

router.post('/', async (req, res) => {
    res.send('Add new movie')
})

module.exports = router
