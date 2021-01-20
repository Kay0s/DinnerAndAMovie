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
// //using bcrypt for password hashing
// const bcrypt = require("bcryptjs");
// //exporting Movie object
// module.exports = (sequelize, DataTypes) => {
//   let Movie = sequelize.define("Movie", {
//     //Movie
//     movieSearchTerm: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1, 50],
//       },
//     },
//     likes: {
//       type: DataTypes.INTEGER,
//       defaultValue: 0,
//     },

//     freezeTableName: true,
//   });
//   // Movie.hasMany(Dinner);
//   // Movie.belongsTo(Dinner, {
//   //   as: "Pairigns",
//   //   foreignKey: "currentVersionId",
//   //   constraints: false,
//   // });
//   return Movie;
// };
module.exports = function (sequelize, DataTypes) {
  let Dinner = sequelize.define("Dinner", {
    //
    name: DataTypes.STRING,
  });

  Dinner.associate = function (models) {
    Dinner.belongsTo(models.Movie, {
      foreignKey: {
        allowNull: false,
        onDelete: "cascade",
      },
    });
  };

  return Dinner;
};
