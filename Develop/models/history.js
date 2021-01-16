//using bcrypt for password hashing
const bcrypt = require("bcryptjs");
//exporting History object
module.exports = function(sequelize, DataTypes) {
    let History = sequelize.define("History", {
        //Food 
        foodAPIURL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //password cannot be null
        movieAPIURL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING
        }
    });
    //compare unhashed password to password in the db
    History.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    //automatically hash the History's password before creating them in the db
    History.addHook("beforeCreate", function(History) {
        History.password = process.hashSync(History.password, bcrypt.genSaltSync(10), null);
    });
    return History;
}