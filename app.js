const express = require('express')
const cors = require('cors')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const app = express()
app.use(cors())

app.use(express.json())

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})



app.listen(3000)