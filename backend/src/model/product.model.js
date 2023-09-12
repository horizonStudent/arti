const product = (sequelize,DataTypes) =>{

    return sequelize.define('product', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
          },
          sku: {
            type: DataTypes.STRING,
          },
          price: {
            type: DataTypes.STRING,
          },
          tags: {
            type: DataTypes.STRING,
          },
          description: {
            type: DataTypes.STRING,
          },
          image_url: {
            type: DataTypes.STRING,
          }
        // Other model options go here
      });

}

export default product
