const User = require('../model/User');
const role = require('../enum/role');
const error = require('../../../utils/error');

module.exports = async (id, user) => {
    let userDelete = await User.findById({_id: id, active: true});

    if (!userDelete) {
        throw await error([{msg: 'Usuario não cadastrado.'}]);
    }

    if (user.id === userDelete.id) {
        userDelete.active = false
        userDelete.save();
    } else if (role.PROFESSOR != user.role) {
        throw await error([{msg: 'Usuario não autorizado.'}]);
    } else if (user.role === userDelete.role) {
        throw await error([{msg: 'Usuario não autorizado.'}]);
    } else {
        userDelete.active = false
        userDelete.save();
    }

};