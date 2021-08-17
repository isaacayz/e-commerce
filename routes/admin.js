const express = require('express')
const path = require('path')

const dirUtil = require('../utils/path')

const router = express.Router()

// admin get request for add product
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(dirUtil, 'views', 'add-product.html'))
})

// admin post request for add product
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})


module.exports = router