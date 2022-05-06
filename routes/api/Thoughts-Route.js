const router = require('express').Router()

const {
    findAllThoughts, // works
    createThought, //workds
    findOneThought, //works
    updateThought, //works
    deleteThought, //works
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-contoller')


router
    .route('/')
    .get(findAllThoughts)
    .post(createThought)


//???
router.route('/:thoughtsId/reactions').post(addReaction)

router
    .route('/:id')
    .get(findOneThought)
    .put(updateThought)
    .delete(deleteThought)


    //????
    router.route('/:userId/:thoughtsId/:reactionId').delete(deleteReaction)


    module.exports = router