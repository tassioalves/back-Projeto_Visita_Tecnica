const error = require('../utils/error');

module.exports = async (request, response, next) => {
    try {
        const user = request.user;
        
        let emailSplit = user.email.split('@');
        if (!emailSplit[1] == 'ifms.edu.br' || !emailSplit[1] == 'estudante.ifms.edu.br') {
          throw await error([{ msg: 'Email Inválido!' }]);
        }
    
        next();
    } catch (e) {
        response
            .status(401)
            .send(e)
    }
}