//using bcrypt for password hashing
const bcrypt = require("bcryptjs");
//exporting User object
module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        //username must not be null and must not already exist
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        //password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    //compare unhashed password to password in the db
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    //automatically hash the user's password before creating them in the db
    User.addHook("beforeCreate", function(user) {
        user.password = process.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
}