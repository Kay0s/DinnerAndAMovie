module.exports = function(sequelize, DataTypes) {
    const Movie = sequelize.define("Movie", {
      // Giving the Movie model a title of type STRING
      title: DataTypes.STRING
    });
  
    Movie.associate = function(models) {
      // Associating Movie with Posts
      // When an Movie is deleted, also delete any associated Posts
      Movie.hasMany(models.Dinner, {
        onDelete: "cascade"
      });
    };
  
    return Movie;
  };