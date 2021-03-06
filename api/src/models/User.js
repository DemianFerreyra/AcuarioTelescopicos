const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    firstname: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    Lastname: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: { 
        type: DataTypes.STRING,
        allowNull: true,
    },
  });
};