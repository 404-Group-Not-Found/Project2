// Defining User upon registration with validation 
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 11]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    return User;
  };