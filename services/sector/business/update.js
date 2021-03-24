const Sector = require('../model/Sector');
const error = require('../../../utils/error');

module.exports = async (data) =>{
    const sector = await Sector.findByIdAndUpdate(data._id, data, {new: true});

    if(!sector){
        throw await error([{msg: 'Setor não encontrado na base de dados.'}]);
    }
}