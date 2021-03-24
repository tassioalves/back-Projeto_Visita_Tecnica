const Company = require('../model/Company');
const error = require('../../../utils/error');

module.exports = async (data) =>{
    const company = await Company.findByIdAndUpdate(data._id, data, {new: true});

    if(!company){
        throw await error([{msg: 'Empresa não encontrada na base de dados.'}])
    }
}