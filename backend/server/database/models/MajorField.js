const { DataTypes } = require('sequelize');
const database = require('../config/config');

const MajorField = database.define('MajorField', {
    id_major_field: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull: false},
})

module.exports = MajorField;