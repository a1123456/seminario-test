const mongoose = require('mongoose');

var mongoDB = process.env.MONGO_URI;

const dbConnection = async() => {
    //Código de conexión a la base de datos
    try{
        mongoose.connect(mongoDB, 
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
    
        });
        
    
    console.log('Conectado a mongo');
    }
    catch(error){
        console.log('Ocurrio un error' + error);
    }
    
}




module.exports = dbConnection



