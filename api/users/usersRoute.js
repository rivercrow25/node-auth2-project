const router = require('express').Router()

const db = require('./users-model')

router.get('/', (req, res) => {
    const { department } = req.token
    db.findBy({ department })
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

module.exports = router