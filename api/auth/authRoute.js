const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('../users/users-model')

router.post('/register', (req, res) => {
    const creds = req.body

    const hash = bcrypt.hashSync(creds.password, 14)

    creds.password = hash

    db.add(creds)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).json({ error: err.message })
        })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    db.findBy({ username })
        .first()
        .then(found => {
            if (found && bcrypt.compareSync(password, found.password)) {
                const token = makeToken(found)
                res.status(200).json({ message: 'welcome', token })
            } else {
                res.status(401).json({ message: 'incorrect username or password' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err.message)
        })
})

function makeToken(user) {
    const payload = {
        userId: user.id,
        department: user.department
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, 'blah blah blah', options)
}

module.exports = router