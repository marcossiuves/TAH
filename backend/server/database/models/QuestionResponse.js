const { DataTypes } = require("sequelize");
const database = require("../config");
const QuestionExam = require("./QuestionExam");
const User = require("./User");

const QuestionResponse = database.define("QuestionResponse", {
  id_question_response: { type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
  id_question_exam: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
  option: { type: DataTypes.STRING, allowNull: false },
  id_user: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
});

QuestionResponse.belongsTo(User, { foreignKey: "id_user" });
QuestionResponse.belongsTo(QuestionExam, { foreignKey: "id_question_exam" });

module.exports = QuestionResponse;
