const UserTemp = require('../model/UserTemp');
const User = require('../../user/model/User');
const user = require('../../user/business/createUser');
const error = require('../../../utils/error');
const bcrypt = require('bcryptjs');
const sendEmail = require('../business/sendEmail');

module.exports = async (data) => {
    // Verifica a existencia do usuario na tabela permanente
    let exists = await User.exists({email: data.email});
    if (exists) {
        throw await error([{msg: 'Usuário já Cadastrado!'}]);
    }
    
    // Verifica a existencia do usuario na tabela temporaria
    exists = await UserTemp.exists({email: data.email});
    if (exists) {
        await sendEmail(data.email);
        throw await error([{msg: 'E-mail em fase de cadastro, verifique sua caixa de entrada e confirme seu cadastro.'}]);
    }
    
    
    //CRIANDO OBJETO USER E FAZENDO CRIPTOGRAFIA DA SENHA
    let user = new UserTemp(data);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    console.log('2');
    user.save();
};