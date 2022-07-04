const { DataTypes } = require("sequelize");
const database = require("../config");
const Exam = require("./Exam");
const User = require("./User");

const UserExamResult = database.define("UserExamResult", {
  id_exam: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  id_user: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
  num_right_answers: { type: DataTypes.INTEGER, allowNull: false },
});

UserExamResult.belongsTo(User, { foreignKey: "id_user" });
UserExamResult.belongsTo(Exam, { foreignKey: "id_exam" });

module.exports = UserExamResult;
