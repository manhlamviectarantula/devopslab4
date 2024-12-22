const express = require('express')
const app = express()

app.get('/', (Req, res) => {
    res.send('Hello world')
})

app.listen(8080, () => {
    console.log('Server is runing on port 8080')
})