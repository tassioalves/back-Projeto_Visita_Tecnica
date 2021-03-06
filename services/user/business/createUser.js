const User = require('../model/User');
const UserTemp = require('../../userTemp/model/UserTemp');
const error = require('../../../utils/error');
const bcrypt = require('bcryptjs');

module.exports = async (email) => {
    // Verifica a existencia do usuario na tabela permanente
    let exists = await User.exists({email: email});
    if (exists) {
        throw await error([{msg: 'Você ja confirmou seu cadastro!'}]);
    }

    // Verifica a existencia do usuario na tabela temporaria
    const userTemp = await UserTemp.findOne({email: email});;
    if (!userTemp) {
        throw await error([{msg: 'E-mail nao encontrado na base de dados!'}]);
    }
    const newUser = {
        role: userTemp.role,
        name: userTemp.name,
        email: userTemp.email,
        number: userTemp.number,
        password: userTemp.password
    }

    let user = new User(newUser);
    user.save();
    userTemp.remove();
};