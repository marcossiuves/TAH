const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres@localhost:5432/facul', {dialect: 'postgres', password: 'root'});

// (async () =>{
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }) ()
module.exports = sequelize;