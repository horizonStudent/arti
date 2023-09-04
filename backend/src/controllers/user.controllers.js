import db from "../model/dbConn.js"

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const login = (req, res) =>{
    try {
        res.status(200).send("login page")
    } catch (error) {
        res.status(500).send(error)
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
const alluser = (req, res) =>{
    try {
        res.status(200).send({
            "users": [
                {
                    "name": "John Doe",
                    "age": 30,
                    "city": "New York"
                },
                {
                    "name": "John Doe",
                    "age": 30,
                    "city": "New York"
                },
                {
                    "name": "John Doe",
                    "age": 30,
                    "city": "New York"
                },
                {
                    "name": "John Doe",
                    "age": 30,
                    "city": "New York"
                },
                {
                    "name": "John Doe",
                    "age": 30,
                    "city": "New York"
                },
                {
                    "name": "John Doe",
                    "age": 30,
                    "city": "New York"
                }
            ]
        })
    } catch (error) {
        res.status(500).send(error)
    }
}



export {
    login,
    register,
    alluser
}


/// 429 many request 
// 404 resourse not found
// 200 ok
// 500 error in code
// 502 server side error
// 201 when new data create on database
