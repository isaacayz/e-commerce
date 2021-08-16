const express = require('express')

const router = express.Router()

//another route
router.get('/addProduct', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Submit </button></form>')
})

// create product submission endpoint
router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})


module.exports = router