require("dotenv").config();
const { DATABASE_USERPASSWORD, DATABASE_NAME } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  `postgres://postgres@localhost:5432/${DATABASE_NAME}`,
  { dialect: "postgres", password: DATABASE_USERPASSWORD, logging: true }
);

(async () => {
  try {
    const resultado = await sequelize.sync();
    // console.log(resultado)
    console.log("Conectado ao banco e sincronizado.");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
