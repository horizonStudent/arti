import express from 'express'
import { create, allproduct, deleteProduct,updateProduct } from '../controllers/product.controller.js';

 const productRoutes = (app)=>{
    let routes = express.Router()

    //================================//
        // users services all routes
    //================================//
    routes.post('/carete',create)
    routes.get('/allproduct', allproduct);
    routes.delete('/product/:id', deleteProduct);
    routes.patch('/update/:id', updateProduct);


    //================================//
        // users services all routes
    //================================//
    app.use('/product',routes)
}

export default productRoutes