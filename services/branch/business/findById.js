const Branch = require('../model/Branch');
const error = require('../../../utils/error');

module.exports = async (id) =>{
    const branch = await Branch.findOne({_id: id, active: true});

    if(!branch){
        throw await error([{msg: 'Ramo não encontrado na base de dados.'}])
    }

    return Branch;
}