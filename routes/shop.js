const path = require('path')
const express = require('express')
const router = express.Router()
const dirUtil = require('../utils/path')

router.get('/', (req, res, next) => {
    res.sendFile(path.join(dirUtil,'views', 'shop.html'))
})

module.exports = router