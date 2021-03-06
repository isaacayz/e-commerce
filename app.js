const express = require('express')
const path = require('path')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const { extname } = require('path')

const app = express()
app.engine('hbs', handlebars({extname: 'hbs', defaultLayout: false}))
app.set('view engine', 'hbs')
//app.set('view engine', 'pug')
app.set('views', 'views')
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended : false}))


app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render('404error', {pageTitle: 'Page not found'})
    //res.status(404).sendFile(path.join(__dirname, 'views', '404error.html'))
})



app.listen(3000)