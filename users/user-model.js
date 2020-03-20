const db = require('../data/db-config');
​
module.exports = {
    find,
    findById,
    add
}
​
function find() {
    return db('users')
}
​
function findById(id) {
    return db('users')
        .select('*')
        .where({ id })
        .first()
}
​
function add(user) {
    return db('users')
        .insert(user)
        .then(ids => {
            return findById(ids[0])
        })
}

