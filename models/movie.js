module.exports = (sequelize, DataTypes) => {
  let Movie = sequelize.define("Movie", {
    // Giving the Movie model a name of type STRING
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()"),
    },
  });

  Movie.associate = (models) => {
    // Associating Movie with Dinners
    // When an Movie is deleted, also delete any associated Dinners
    Movie.hasMany(models.Dinner, {
      onDelete: "CASCADE",
      constraints: false,
    });
  };

  return Movie;
};
