import express from 'express'
import { login, register, alluser, deleteUsers,updateUser } from '../controllers/user.controllers.js';

 const userRoutes = (app)=>{
    let routes = express.Router()

    //================================//
        // users services all routes
    //================================//
    routes.post('/login', login); 
    routes.post('/register',register)
    routes.get('/alluser', alluser);
    routes.delete('/user/:id', deleteUsers);
    routes.patch('/update/:id', updateUser);


    //================================//
        // users services all routes
    //================================//
    app.use('/users',routes)
}

export default userRoutes