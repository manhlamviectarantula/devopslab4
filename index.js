const express = require('express')
const app = express()

app.get('/', (Req, res) => {
    res.send('Hello world')
})

app.get('/about', (req, res) => {
    res.send('About Us')
})

app.get('/manh', (req, res) => {
    res.send('Manhhhhhhhhhhhhh111')
})

app.get('/vtc', (req, res) => {
    res.send('Manhhhhhhhhhhhhh11fesffffffffff1 VTC')
})

app.listen(8080, () => {
    console.log('Server is runing on port 8080')
})