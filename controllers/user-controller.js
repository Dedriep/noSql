const {User,Reactions, Thoughts} = require('../models')

const userController = {

    //get all users
    getAllUsers(req,res){
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
    getUsersById(req,res){
        User.findOne({_id: params.id})
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

    // create a user post route
    createUser({body}, res){
        User.create(body)
        .then(data => res.json(data))
        .catch(error => {
            console.log(error)
            res.sendStatus(400)
        })
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
        .catch(error => {
            console.log(error)
            res.sendStatus(400)
        })
    }
}


module.exports = userController