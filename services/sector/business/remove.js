const Sector = require('../model/Sector');
const error = require('../../../utils/error');


module.exports = async (id) => {
    const sector = await Sector.findOne({_id: id, active: true});

    if (!sector) {
        throw await error([{msg: 'Ramo não encontrado!'}]);
    }

    // if (userId != device.userId) {
    //     throw await error([{msg: 'Usuario não autorizado!'}]);
    // }

    sector.active = false;

    sector.save();
};