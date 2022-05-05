const router = require('express').Router
const{
    getUsersById,
    getAllUsers

} = require('../../controllers/user-controller')

router
    .route('/')
    .get(getAllUsers)
    

router
    .route('/:id')
    .get(getUsersById)

module.exports = router