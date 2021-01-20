// //using bcrypt for password hashing
// const bcrypt = require("bcryptjs");
// //exporting User object
// module.exports = function (sequelize, DataTypes) {
//   let User = sequelize.define("User", {
//     //username must not be null and must not already exist
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     //password cannot be null
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
//   //compare unhashed password to password in the db
//   User.prototype.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
//   };
//   //automatically hash the user's password before creating them in the db
//   User.addHook("beforeCreate", function (user) {
//     user.password = process.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   });
//   return User;
// };

// //exporting Movie object
// module.exports = (sequelize, DataTypes) => {
//   let Dinner = sequelize.define(
//     "Dinner",
//     {
//       //Dinner
//       dinnerSearchTerm: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [1, 50],
//         },
//       },
//       likes: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0,
//       },
//     },
//     {
//       freezeTableName: true,
//     }
//   );
//   // Dinner.hasMany(Movie);
//   // Dinner.belongsTo(Movie, {
//   //   as: "Pairigns",
//   //   foreignKey: "currentVersionId",
//   //   constraints: false,
//   // });
//   return Dinner;
// };

module.exports = function (sequelize, DataTypes) {
  let Movie = sequelize.define("Movie", {
    //
    name: DataTypes.STRING,
  });

  Movie.associate = function (models) {
    Movie.hasMany(models.Dinner, {
      onDelete: "cascade",
    });
  };

  return Movie;
};
