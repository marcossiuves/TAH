require('dotenv').config()
const senha = String(process.env.DATABASE_USERPASSWORD);
const db = String(process.env.DATABASE_NAME);
const Sequelize = require('sequelize');

const sequelize = new Sequelize(`postgres://postgres@localhost:5432/${db}`,
    { dialect: 'postgres', password: senha, logging: false }
);

(async () => {
    try {
        const resultado = await sequelize.sync();
        // console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();

module.exports = sequelize;