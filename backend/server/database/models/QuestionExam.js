const { DataTypes } = require("sequelize");
const database = require("../config");
const Exam = require("./Exam");
const Question = require("./Question");

const QuestionExam = database.define("QuestionExam", {
  id_question_exam: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  id_question: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
  id_exam: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
});

QuestionExam.belongsTo(Exam, { foreignKey: "id_exam" });
QuestionExam.belongsTo(Question, { foreignKey: "id_question" });

module.exports = QuestionExam;
