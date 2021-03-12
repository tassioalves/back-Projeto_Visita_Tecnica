const Branch = require('../model/Branch');
const error = require('../../../utils/error');

module.exports = async (data) =>{
    const branch = await Branch.findOne({_id: data._id, active: true});

    if(!branch){
        throw await error([{msg: 'Ramo não encontrado na base de dados.'}])
    }

    branch.name = data.name;
    branch.save();
}