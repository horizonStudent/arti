import { Sequelize  , DataTypes } from "sequelize";
import usersModel from "./users.model.js";
import product from "./product.model.js";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('student', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

let db = {};
db.sequelize = sequelize
db.users = usersModel(sequelize,DataTypes);
db.product =product(sequelize,DataTypes);

(async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()
// db.product.sync({focus: true})

export default db;