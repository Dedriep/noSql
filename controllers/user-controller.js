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
        .cath(error => {
            console.log(error)
            res.sendStatus(400)
        })

    },

    getUsersById(req,res){
        User.findOne({_id: params.id})
        User.find({})
        .populate({
            path: 'thoughts',
            select: ('-__v')
        })
        .select('-__v')
        .then(data => res.json(data))
        .cath(error => {
            console.log(error)
            res.sendStatus(400)
        })

    }
}


module.exports = userController