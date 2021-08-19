const path = require('path')
const express = require('express')
const router = express.Router()
const dirUtil = require('../utils/path')
const productData = require('./admin')

router.get('/', (req, res, next) => {
    const adminData = productData.products
    res.render('shop', {prods : adminData, pageTitle: 'My Shop', path: '/'})
})

module.exports = router