import express from 'express'
const app = express()

import userRoutes from './src/routes/users.route.js'


userRoutes(app)

app.use('/', function (req, res) {
  res.send('Application is working')
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})

