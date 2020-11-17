const config = require('config');
const mongoose = require('mongoose');


module.exports = async () => {
    try {
        const uri = config.get('mongoURI');
        const options = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        };
        await mongoose.connect(uri, options);
        console.log('Conectado ao MongoAtlas!')
    } catch (error) {
        console.log("Problema na conexão com o Banco de Dados! " + error);
    }
};