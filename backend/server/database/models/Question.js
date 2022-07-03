const { DataTypes } = require('sequelize');
const database = require('../config');

const Question = database.define('Question', 
{
    id_question: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, },
    statement: { type: DataTypes.STRING, allowNull: false },
    option_a: { type: DataTypes.STRING, allowNull: false },
    option_b: { type: DataTypes.STRING, allowNull: false },
    option_c: { type: DataTypes.STRING, allowNull: false },
    option_d: { type: DataTypes.STRING, allowNull: false },
    option_e: { type: DataTypes.STRING, allowNull: false },
    right_option: { type: DataTypes.STRING, allowNull: false },
    evaluated: { type: DataTypes.BOOLEAN, allowNull: false } // marcado pra rodar
})

module.exports = Question;