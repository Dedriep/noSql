const {Schema,model} = require('mongoose')

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            trim: true,
           unique: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
           unique: true

        },

        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],

        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User'
            }]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

userSchema.virtual('friendcount').get(function(){
    return this.friends.length
})

const User = model('User', userSchema)

module.exports= User