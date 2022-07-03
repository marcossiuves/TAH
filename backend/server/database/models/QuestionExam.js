const { DataTypes } = require('sequelize');
const database = require('../config');

const QuestionExam = database.define('QuestionExam', 
{
    id_question_exam: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
    id_question: { type: DataTypes.INTEGER, allowNull: false },
    id_exam: { type: DataTypes.INTEGER, allowNull: false },
})

module.exports = QuestionExam;