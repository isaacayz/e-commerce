const express = require('express')
const path = require('path')
const cors = require('cors')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const app = express()
app.use(cors())

app.use(express.json())

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname, '../', 'views', '404error.html')
})



app.listen(3000)