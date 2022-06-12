const Sequelize = require('sequelize');
const DB = require('./databaseVariables')
const sequelize = new Sequelize(`postgres://postgres@localhost:5432/${DB.NAME}`,
    { dialect: 'postgres', password: DB.USERPASSWORD, logging: false }
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