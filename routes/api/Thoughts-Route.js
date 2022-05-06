const router = require('express').Router()

const {
    findAllThoughts,
    createThought
} = require('../../controllers/thoughts-contoller')


router
    .route('/')
    .get(findAllThoughts)
    .post(createThought)


    module.exports = router