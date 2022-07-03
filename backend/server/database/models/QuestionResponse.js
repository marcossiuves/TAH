const { DataTypes } = require('sequelize');
const database = require('../config');

const QuestionResponse = database.define('QuestionResponse', 
{
    id_question_response: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
    id_exam: { type: DataTypes.INTEGER, allowNull: false },
    id_question: { type: DataTypes.INTEGER, allowNull: false },
    option: { type: DataTypes.STRING, allowNull: false },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
})

module.exports = QuestionResponse;
