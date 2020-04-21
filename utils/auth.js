const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.headers.authorization) {
        jwt.verify(req.headers.authorization, 'blah blah blah', function (err, decoded) {
            if (err) {
                res.status(400).json(err)
            } else {
                req.token = decoded
                next()
            }
        })
    } else {
        res.status(400).json({ message: 'error no credentials found' })
    }
}