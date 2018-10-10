const express = require('express')
const router = express.Router()
const movies = require('./details')

router.get('/:title', movies.get)

module.exports = router