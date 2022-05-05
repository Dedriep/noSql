const router = require('express').Router()
const userRoute = require('./User-Routes')

router.use('/api/user', userRoute)

// router.use(req,res) => {
//     res.status(404).send('')
// }

router.use((req, res) => {
    res.status(404).send('<p> 404 Error!</p>');
  });

module.exports = router