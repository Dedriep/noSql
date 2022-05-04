const {schema,model} = require('mongoose')

const UserSchema = new Schema (
    {
        username: {
            type: string,
            required: true,
            trim: true,
            unique: true
        },

        email: {
            type: string,
            required: true,
            trim: true,
            unique: true

        },
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)


const User = model('User', UserSchema)

module.exports= User