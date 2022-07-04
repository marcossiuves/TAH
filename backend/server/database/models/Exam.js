const { DataTypes } = require("sequelize");
const database = require("../config");
const User = require("./User");
const MajorField = require("./MajorField");

const Exam = database.define("Exam", {
  id_exam: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  subject: { type: DataTypes.STRING, allowNull: false },
  id_user: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
  id_major_field: { type: DataTypes.INTEGER, allowNull: true, foreignKey: true },
  question_amount: { type: DataTypes.INTEGER, allowNull: false },
});

Exam.belongsTo(User, { foreignKey: "id_user" });
Exam.belongsTo(MajorField, { foreignKey: "id_major_field" });

module.exports = Exam;
