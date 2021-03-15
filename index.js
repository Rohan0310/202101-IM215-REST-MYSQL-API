const express = require('express')

const morgan = require('morgan')

const bodyParser = require('body-parser');

const app = express()
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (request, response) => {
   // console.log('Request,Received')
    //response.json({msg: 'Welcome'});
   // response.end()

   //Query
   console.log('Query parameter')
   console.log(request.query)

   Route
   console.log('Route parameter')
   console.log(request.params)

   //response.send(request.query['first_name'])
 
   //Body
   console.log('Body parameter')
    console.log(request.body)
    

   response.end()
})
app.get('/:first_name/:last name/:age', (request, response) => {

    //Route
    console.log('Route parameter')
    console.log(request.params)
    response.end()
})
app.listen(3333, () => {
    console.log ('The server is up and listening on port 3333')
})
