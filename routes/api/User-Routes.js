const router = require('express').Router()
const{
    getUsersById, //get by id // works
    getAllUsers, //get all // works
    createUser, //create user // workd
    deleteUser, // delete user // ?? not working
    addFriend, // add a friend
    updateUser, // works
    deleteFriend

} = require('../../controllers/user-controller')

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/:userId/friendId').post(addFriend)

router.route('/:userId/friends:/Id').delete(deleteFriend)
router
    .route('/:id')
    .get(getUsersById)
    .post(deleteUser)
    .put(updateUser)

module.exports = router