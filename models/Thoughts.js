const {Schema, model, Types, default: mongoose} = require('mongoose')


const ReactionsSchema = new Schema (
    
    {

    reactionsId: {

        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date
    }
},

{
    toJSON: {
        virtuals: true
    },
    id: false
})


const ThoughtsSchema = new Schema (
    {
        thoughtText:{
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [ReactionsSchema]
    },

    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)


const Thoughts = model('Thoughts', ThoughtsSchema)

module.exports =Thoughts