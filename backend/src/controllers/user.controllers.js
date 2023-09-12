import db from "../model/dbConn.js"

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const login = async (req, res) =>{
    try {
        let findData = await db.users.findOne({
            where : {
                email : req.body.email,
                password : req.body.password
            },
            raw : true
        });

        if(findData){
            res.status(200).send(findData)
        }else{
            throw new Error("Your email and password is incorrect.")
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const register = async (req, res) =>{
    try {
        let saveDataIndb = await db.users.create(req.body)
        res.status(201).send(saveDataIndb)
    } catch (error) {
        res.status(500).send(error)
    }
}

/**
 * get all users from the
 * @param {*} req 
 * @param {*} res 
 */
const alluser = async (req, res) =>{
    try {
        let allUsers = await db.users.findAll({})
        res.status(200).send(allUsers)
    } catch (error) {
        res.status(500).send(error)
    }
}


const deleteUsers = async (req, res) =>{
    try {
        let userID = req.params.id
        
        let checkIfExist = await db.users.findOne({where : {id : userID}})

        if(checkIfExist){
            await db.users.destroy({where : {id : userID}})
            res.status(200).send({message : "Your account id no. "+userID+" successfully deleted "})
        }else{
            throw new Error("please enter valid id.")
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}


const updateUser = async (req, res) =>{
    try {
        let data = req.body
        let userID = req.params.id // get user id then update 

        let checkIfExist = await db.users.findOne({where : {id : userID}})

        if(checkIfExist){
            let update = await db.users.update(data,{where : {id : userID }}) 
            res.status(200).send({message : "Your account id no. "+userID+" successfully updated. "})
        }else{
            throw new Error("please enter valid id.")
        }
    } catch (error) {

        res.status(500).send(error.message)
    }
}

export {
    login,
    register,
    alluser,
    deleteUsers,
    updateUser
}


/// 429 many request 
// 404 resourse not found
// 200 ok
// 500 error in code
// 502 server side error
// 201 when new data create on database
