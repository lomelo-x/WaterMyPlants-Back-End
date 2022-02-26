const router = require('express').Router()
const { checkIfUserExists } = re
const User = require('./users-model')

router.get('/', (req, res, next) => {
    User.getUsers()
    .then(users => {
        res.json(users)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    User.getUserByID()
    .then(user => {
        res.json(user)
    })
    .catch(next)
})

module.exports = router