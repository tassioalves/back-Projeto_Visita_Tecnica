const Sector = require('../model/Sector');
const error = require('../../../utils/error');

module.exports = async (id) =>{
    const sector = await Sector.findOne({_id: id, active: true});

    if(!sector){
        throw await error([{msg: 'Setor não encontrado na base de dados.'}])
    }

    return sector;
}