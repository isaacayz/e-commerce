const express = require('express')
const { route } = require('./admin')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send("This is the root route")
})

module.exports = router