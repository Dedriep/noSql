const {User, Reactions, Thoughts} = require('../models')

const thoughtsController = {

    createThought({params, body}, res){
        console.log(params)
        Thoughts.create(body)
        .then(({_id}) =>{
            return User.findOneAndUpdate(
                {_id: params.userId},
                {$push: {thoughts: _id}},
                {new:true}
            )
        } )
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

    // get all 

    findAllThoughts(req,res){
        Thoughts.find({})
        .populate({
            path: 'reactions',
            select: ('-__v')
        })
        .select('-__v')
        .then(data => res.json(data))
        .catch(error => {
            console.log(error)
            res.sendStatus(400)
        })
    },

    ///find thought by id

    findOneThought(req, res){
        Thoughts.findOne({_id:params.id})
        .populate({
            path: 'reactions',
            select: ('-__v')
        })
        .select('-__v')
        .then(data => res.json(data))
        .catch(error => {
            console.log(error)
            res.sendStatus(400)
        })
    },
//update thoguht
    updateThought({params,body},res){
        Thoughts.findOneAndUpdate({_id: params.id}, body, { new: true, runValidators: true })
        .then(data =>{
            if (!data){
                res.status(404).json({message:'no thoguht found'})
            } res.json(data)
        })
        .catch(error=>res.json(error))
    }
}

module.exports = thoughtsController