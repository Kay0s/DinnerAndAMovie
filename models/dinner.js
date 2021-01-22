module.exports = function(sequelize, DataTypes) {
  let Dinner = sequelize.define("Dinner", {
    mealSTR: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }
  });

  Dinner.associate = function(models) {
    // A Dinner belongs to movies
    // A Dinner can't be 
    Dinner.belongsTo(models.Movie, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Dinner;
};