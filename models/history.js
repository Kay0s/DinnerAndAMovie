// //using bcrypt for password hashing
// const bcrypt = require("bcryptjs");
// //exporting History object
// module.exports = function (sequelize, DataTypes) {
//   let History = sequelize.define("History", {
//     //Food
//     dinnerSearchTerm: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     //password cannot be null
//     movieSearchTerm: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     likes: {
//       type: DataTypes.INTEGER,
//       defaultValue: 0,
//     },
//   });
//   return History;
// };
//using bcrypt for password hashing
const bcrypt = require("bcryptjs");
//exporting Movie object
module.exports = (sequelize, DataTypes) => {
  let Movie = sequelize.define(
    "Movie",
    {
      //Movie
      movieSearchTerm: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      created_at: {
        type: TIMESTAMP,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  Movie.associate = (models) => {
    Movie.hasOne(models.Dinner, {
      foreignKey: "id",
      name: "dinnerAndMoviePairingID",
      onDelete: "cascade",
    });
  };
  return Movie;
};
