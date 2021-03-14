const express = require('express')

const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))

app.get('/', (request, response) => {
   // console.log('Request,Received')
    //response.json({msg: 'Welcome'});
    response.end()
})
app.listen(3333, () => {
    console.log ('The server is up and listening on port 3333')
})
