const Sequelize = require('sequelize');
const database = require('./db');
const Question = database.define('Question', {
    id_question: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, },
    statement: { type: Sequelize.STRING, allowNull: false },
    option_a: { type: Sequelize.STRING, allowNull: false },
    option_b: { type: Sequelize.STRING, allowNull: false },
    option_c: { type: Sequelize.STRING, allowNull: false },
    option_d: { type: Sequelize.STRING, allowNull: false },
    option_e: { type: Sequelize.STRING, allowNull: false },
    right_option: { type: Sequelize.STRING, allowNull: false },
    evaluated: {type: Sequelize.BOOLEAN, allowNull: false}
})

module.exports = Question;