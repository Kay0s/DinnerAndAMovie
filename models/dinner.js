module.exports = function(sequelize, DataTypes) {
    let Dinner = sequelize.define("Dinner", {
        strMEAL: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
    Dinner.associate = function(models) {
      // We're saying that a Dinner should belong to an Author
      // A Dinner can't be created without an Author due to the foreign key constraint
      Dinner.belongsTo(models.Movie, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Dinner;
  };
  