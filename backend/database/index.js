
(async () => {
    const database = require('./db');
    // const User = require('./User');
    // const UserType = require('./UserType');
    // const Question = require('./Question');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();