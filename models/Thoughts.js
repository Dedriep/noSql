const {Schema, model, Types, default: mongoose} = require('mongoose')

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
            type: Schema.Types.ObjectId, 
            ref: 'User',
            required: true,
        },

        reactions: [{
            type: Schema.Types.ObjectId,
            ref: 'rections'
            
        }]
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