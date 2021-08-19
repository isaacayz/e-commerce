const express = require('express')
const path = require('path')

const dirUtil = require('../utils/path')

const router = express.Router()
const products = []

// admin get request for add product
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Submit Product', path: '/admin/add-product'})
    //res.sendFile(path.join(dirUtil, 'views', 'add-product.html'))
})

// admin post request for add product
router.post('/add-product', (req, res, next) => {
    products.push({'title' : req.body.title})
    //console.log(req.body.title)
    res.redirect('/')
})


exports.routes = router
exports.products = products