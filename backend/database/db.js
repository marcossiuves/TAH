const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres@localhost:5432/facul', {dialect: 'postgres', password: 'root'});
module.exports = sequelize;