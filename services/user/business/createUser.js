const User = require('../model/User');
const error = require('../../../utils/error');
const bcrypt = require('bcryptjs');

module.exports = async (data) => {
    let exists = await User.exists({email: data.email});

    if (exists) {
        throw await error([{msg: 'Usuário já Cadastrado!'}]);
    }
    user = new User(data);

    //FAZENDO CRIPTOGRAFIA DA SENHA
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.save();
};