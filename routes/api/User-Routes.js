const router = require('express').Router()
const{
    getUsersById, //get by id // works
    getAllUsers, //get all // works
    createUser, //create user // workd
    deleteUser, // delete user // works
    addFriend, // add a friend ??
    updateUser, // works
    deleteFriend //?????

} = require('../../controllers/user-controller')

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/user/:userId/friends/:friendId').post(addFriend)

router.route('/:userId/friends:/Id').delete(deleteFriend)
router
    .route('/:id')
    .get(getUsersById)
    .delete(deleteUser)
    .put(updateUser)

module.exports = router