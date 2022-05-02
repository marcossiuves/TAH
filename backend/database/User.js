const Sequelize = require('sequelize');
const database = require('./db');

const User = database.define('User', {
    id_user: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, },
    registration: { type: Sequelize.INTEGER, allowNull: false, },
    password: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false }
    // id_user_type: {}     
})

module.exports = User;