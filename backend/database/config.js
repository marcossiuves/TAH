const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres@localhost:5432/facul', {dialect: 'postgres', password: 'root', logging: false});

(async () => {
    try {
        const resultado = await sequelize.sync();
        // console.log(resultado);
    } catch (error) {
        // console.log(error);
    }
})();

module.exports = sequelize;