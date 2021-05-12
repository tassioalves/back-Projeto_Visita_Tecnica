const Visit = require('../model/Visit');
const error = require('../../../utils/error');
const statusEnum = require('../enum/status');
const readyToFinalize= require('../business/readyToFinalize');

module.exports = async (data, userId) =>{
    const vis = await Visit.findById({_id: data._id, active: true});

    if (vis.user != userId) {
      throw await error([{ msg: 'Usuario nao autorizado.' }]);
    }

    if(await readyToFinalize(vis) == false){
        throw await error([{ msg: 'Visita ainda não pode ser finalizada' }]);
    }

    const visit = await Visit.findByIdAndUpdate(data._id, {status:statusEnum.FINALIZADA}, {new: true});

    if (!visit) {
        throw await error([{msg: 'Visita não encontrada na base de dados.'}]);
    }
    return visit;
}
