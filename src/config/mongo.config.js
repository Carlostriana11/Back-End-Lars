const mongoose = require('mongoose');


const dbConnection = async() => {
    try {
        await mongoose.connect( process.env.DB_URl, {});
        console.log("base de datos inicializada exitosamente");
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la base de datos');
    }
}

module.exports = {
    dbConnection
}