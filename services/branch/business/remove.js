const Branch = require('../model/Branch');
const error = require('../../../utils/error');


module.exports = async (id) => {
    const branch = await Branch.findOne({_id: id, active: true});

    if (!branch) {
        throw await error([{msg: 'Ramo não encontrado!'}]);
    }

    // if (userId != device.userId) {
    //     throw await error([{msg: 'Usuario não autorizado!'}]);
    // }

    branch.active = false;

    branch.save();
};