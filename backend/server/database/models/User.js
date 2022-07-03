const { DataTypes } = require('sequelize');
const database = require('../config');

const User = database.define('User', 
{
    id_user: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
    registration: { type: DataTypes.INTEGER, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    id_user_type: {type: DataTypes.INTEGER, allowNull: true}     
});

module.exports = User;