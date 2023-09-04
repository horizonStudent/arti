import express from 'express'
import { login, register, alluser } from '../controllers/user.controllers.js';

 const userRoutes = (app)=>{
    let routes = express.Router()

    //================================//
        // users services all routes
    //================================//
    routes.get('/login', login);
    routes.post('/register',register)
    routes.get('/alluser', alluser);
    //================================//
        // users services all routes
    //================================//
    app.use('/users',routes)
}

export default userRoutes