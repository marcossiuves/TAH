const { DataTypes } = require("sequelize");
const database = require("../config");
const Exam = require("./Exam");
const Question = require("./Question");
const User = require("./User");

const QuestionResponse = database.define("QuestionResponse", {
  id_question_response: { type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
  id_exam: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
  id_question: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
  option: { type: DataTypes.STRING, allowNull: false },
  id_user: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
});

QuestionResponse.belongsTo(User, { foreignKey: "id_user" });
QuestionResponse.belongsTo(Exam, { foreignKey: "id_exam" });
QuestionResponse.belongsTo(Question, { foreignKey: "id_question" });

module.exports = QuestionResponse;
