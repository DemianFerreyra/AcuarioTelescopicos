const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    minprice: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    categories: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: { 
      type: DataTypes.TEXT,
      allowNull: true,
    },
    discount: { 
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    variant: { 
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
  });
};