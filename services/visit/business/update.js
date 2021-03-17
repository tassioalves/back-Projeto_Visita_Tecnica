const Visit = require('../model/Visit');
const error = require('../../../utils/error');

module.exports = async (data) =>{
    const visit = await Visit.findByIdAndUpdate(data._id, data, {new: true});

    if(!visit){
        throw await error([{msg: 'Visita não encontrada na base de dados.'}])
    }

    return visit;
}