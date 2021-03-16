const Branch = require('../model/Branch');
const error = require('../../../utils/error');

module.exports = async (data) =>{
    const branch = await Branch.findByIdAndUpdate(data._id, data, {new: true});

    if(!branch){
        throw await error([{msg: 'Ramo não encontrado na base de dados.'}])
    }

    branch.save();
}