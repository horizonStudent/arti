import express from 'express'
const app = express()

app.use(express.json())

import userRoutes from './src/routes/users.route.js';
import db from './src/model/dbConn.js';
userRoutes(app)

app.use('/', function (req, res) {
  res.send('Application is working')
})



app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
