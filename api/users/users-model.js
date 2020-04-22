const db = require('../../data/db-config')

module.exports = {
    get,
    add,
    find,
    findBy
}

function get(department) {
    return db('users')
        .where({ department })
}

function add(body) {
    return db('users')
        .insert(body, 'id')
        .then(([id]) => {
            return find(id)
        })
}

function find(id) {
    return db('users')
        .where({ id })
        .then(user => {
            return user
        })
}

function findBy(filter) {
    return db("users").where(filter)
        .select('users.username', 'users.department')
}