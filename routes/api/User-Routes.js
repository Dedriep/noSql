const router = require('express').Router()
const{
    getUsersById, //get by id
    getAllUsers, //get all
    createUser, //create user
    deleteUser // delete user

} = require('../../controllers/user-controller')

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
    

router
    .route('/:id')
    .get(getUsersById)
    .post(deleteUser)

module.exports = router