const express = require('express')
const path = require('path')

const dirUtil = require('../utils/path')

const router = express.Router()
const products = []

// admin get request for add product
router.get('/add-product', (req, res, next) => {
    res.render('add-product')
})

// admin post request for add product
router.post('/add-product', (req, res, next) => {
    res.redirect('/')
})


exports.routes = router
exports.products = products