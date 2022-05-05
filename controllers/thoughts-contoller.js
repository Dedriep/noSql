const {User, Reactions, Thouughts, Thoughts} = require('../models')

const thoughtsController = {

    createThought({params, body}, res){
        Thoughts.create(body)
        .then(
            
        )
    }
}

module.exports = thoughtsController