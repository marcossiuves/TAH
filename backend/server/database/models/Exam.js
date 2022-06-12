const { DataTypes } = require('sequelize');
const database = require('../config/config');

const Exam = database.define('Exam', 
{
    id_exam: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
    title: {type: DataTypes.STRING, allowNull: false},
    subject: { type: DataTypes.STRING, allowNull: false },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
    id_major_field: { type: DataTypes.INTEGER, allowNull: true },
    question_amount: { type: DataTypes.INTEGER, allowNull: false },
})

module.exports = Exam;