const {Schema,model} = require('mongoose')

const UserSchema = new Schema (
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

        friends: [this]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

UserSchema.virtual('friendcount').get(function(){
    return this.friends.length
})

const User = model('User', UserSchema)

module.exports= User