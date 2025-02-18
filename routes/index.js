const router = require('express').Router()
const miscController = require('../controllers/misc.controller')
const moviesController = require('../controllers/movies.controller')


// MISC
router.get('/', miscController.home)

// BOOKS

router.get('/movies', moviesController.list)
router.get('/movies/:id', moviesController.movieDetail)

module.exports = router