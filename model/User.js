const {DataTypes} = require("sequelize");
const db = require("../db");

module.exports = db.define("User",{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
});