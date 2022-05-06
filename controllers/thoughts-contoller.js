const {User, Thoughts} = require('../models')

const thoughtsController = {


    //create a thought
    createThought({body,}, res){
        console.log("inside create thought", body)
        Thoughts.create(body)
        .then(({_id}) =>{
            console.log("THIS IS THE id",_id)
            return User.findOneAndUpdate(
                {_id: body.userId},
                {$push: {thoughts: _id}},
                {new:true}
            )
        } )
        .then(data => {
            if (!data){
                res.status(404).json({message:' no user found'})
                return
            }res.json(data)
        })
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

    findOneThought({params}, res){
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
    },

    // delete thought
    deleteThought({params},res){
        Thoughts.findOneAndDelete({_id: params.id}) 
        .catch(error => {
            console.log(error)
            res.sendStatus(400)
        })
    },


    //reaction to a thought

    addReaction({params, body}, res){
        Reactions.Create(body)
        .then(({_id}) =>{
            return  Thoughts.findOneAndUpdate(
                {_id: params.thoughtsId},
                {$push: {reactions:_id}},
                {new:true}
            )
        })
       
        .then(data =>{
            if (!data){
                res.status(404).json({message:'no thoguht found'})
            } res.json(data)
        })
        .catch(error=>res.json(error))
    },

    // delete reaction

    deleteReaction({params}, res){
        Thoughts.findOneAndUpdate({_id: params.id},
        {$pull: {reactions: params.reactionsId }},
        {new:true}
        )
        .then(data=>{res.json(data) })
        .catch(error=> res.json(error))
    }
}

module.exports = thoughtsController