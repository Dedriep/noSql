const {User, Thoughts} = require('../models')

const userController = {

    //get all users
    getAllUsers({req},res){
        User.find({})
        .populate({
            path: 'thoughts',
            select: ('-__v')
        })
        .select('-__v')
        .then(data => res.json(data))
        .catch(error => {
            console.log(error)
            res.sendStatus(400)
        })

    },

    //get user by id
    getUsersById({params},res){
        User.findOne({_id: params.id})
        .populate({
            path: 'thoughts',
            select: ('-__v')
        })
        .select('-__v')
        .then(data => res.json(data))
        .catch(error => {
            console.log(error)
            res.sendStatus(400)
        })

    },

    // create a user post route
    createUser({body}, res){
        User.create(body)
        .then(data => res.json(data))
        .catch(error => res.json(error));

    },
//update a user
    updateUser({body, params}, res){
        User.findOneAndUpdate({_id:params.id}, body, {new: true, runValidators:true})
        .then(data => {
            if (!data){
                res.status(404).json({message:' no user found'})
                return
            }res.json(data)
        } )
        .catch(error => {
            console.log(error)
        })
    },

    //delete a user
    deleteUser( {params}, res){
        User.findOneAndDelete({_id:params.id})
        .then(data=>{res.json(data)})
        .catch(error => {
            console.log(error)
            res.sendStatus(400)
        })
    },


    /// add a friend
    addFriend( {params}, res){
        User.findOneAndUpdate(
        {_id: params.userId},
        {$push: {friends: _id}},
        {new:true},

        )
        .then(data => {
            if (!data){
                res.status(404).json({message:' no user found'})
                return
            }res.json(data)
        } )
        .catch(error => {
            console.log(error)
        })
    },


    //delete friend
    deleteFriend({params}, res){
        User.findOneAndDelete({_id: params.id})
        .then(data=>{res.json(data)})
        .catch(error => {
            console.log(error)
            res.sendStatus(400)
        })
    },
    
}


module.exports = userController