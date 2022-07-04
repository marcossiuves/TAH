const { DataTypes } = require("sequelize");
const database = require("../config");
const UserType = require("./UserType");

const User = database.define("User", {
  id_user: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  registration: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  id_user_type: { type: DataTypes.INTEGER, allowNull: true, foreignKey: true },
});

User.belongsTo(UserType, { foreignKey: "id_user_type" });

module.exports = User;
