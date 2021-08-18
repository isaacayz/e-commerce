const path = require('path')
const express = require('express')
const router = express.Router()
const dirUtil = require('../utils/path')
const productData = require('./admin')

router.get('/', (req, res, next) => {
    res.render('shop')
})

module.exports = router