// const {Schema, model, Types} = require('mongoose')

// const ReactionsSchema = new Schema (
    
//     {

//     reactionId: {

//         type: Schema.Types.ObjectId,
//         default: () => new Types.ObjectId()
//     },

//     reactionBody: {
//         type: String,
//         required: true,
//         maxlength: 280
//     },
//     username:{
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date
//     }
// },

// {
//     toJSON: {
//         virtuals: true
//     },
//     id: false
// })

// const Reactions = model('Reactions', ReactionsSchema)


// module.exports= Reactions