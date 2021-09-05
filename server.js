const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use('/login', (req, res) => {
    res.send({
        token: 'token123456789'
    })
})

app.listen(8080, () => console.log('API is running'))