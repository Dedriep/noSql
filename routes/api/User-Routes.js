const router = require('express').Router()
const{
    getUsersById,
    getAllUsers,
    createUser

} = require('../../controllers/user-controller')

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
    

router
    .route('/:id')
    .get(getUsersById)

module.exports = router