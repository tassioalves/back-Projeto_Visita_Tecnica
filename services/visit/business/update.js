const Visit = require('../model/Visit');
const error = require('../../../utils/error');

module.exports = async (data, userId) =>{
    const vis = await Visit.findById({_id: data._id, active: true});

    if (vis.user != userId) {
      throw await error([{ msg: 'Usuario nao autorizado.' }]);
    }

    const visit = await Visit.findByIdAndUpdate(data._id, data, {new: true});

    if (!visit) {
        throw await error([{msg: 'Visita não encontrada na base de dados.'}]);
    }
}
