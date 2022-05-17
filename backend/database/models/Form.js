const { DataTypes } = require('sequelize');
const database = require('../config');

const Form = database.define('Form', {
    id_form: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, },
    id_exam: { type: DataTypes.INTEGER, allowNull: false },
    id_question: { type: DataTypes.INTEGER, allowNull: false },
    option: { type: DataTypes.STRING, allowNull: false },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
})

module.exports = Form;
