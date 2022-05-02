const Sequelize = require('sequelize');
const database = require('./db');
const UserType = database.define('UserType', {
    id_user_type: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, },
    role: { type: Sequelize.STRING, allowNull: false },
})

module.exports = UserType;