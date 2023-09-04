const usersModel = (sequelize,DataTypes) =>{

    return sequelize.define('User', {
        // Model attributes are defined here
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        phone: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        email: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        password : {
            type: DataTypes.STRING
        }
      }, {
        // Other model options go here
      });

}

export default usersModel