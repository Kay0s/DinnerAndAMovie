//using bcrypt for password hashing
const bcrypt = require("bcryptjs");
//exporting History object
module.exports = function(sequelize, DataTypes) {
    let History = sequelize.define("History", {
        //Food 
        dinnerSearchTerm: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //password cannot be null
        movieSearchTerm: {
            type: DataTypes.STRING,
            allowNull: false
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
        
    });
    return History;
}