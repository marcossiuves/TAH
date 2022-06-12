const { DataTypes } = require('sequelize');
const database = require('../config/config');

const UserType = database.define('UserType', 
{
    id_user_type: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, },
    role: { type: DataTypes.STRING, allowNull: false },
})

module.exports = UserType;