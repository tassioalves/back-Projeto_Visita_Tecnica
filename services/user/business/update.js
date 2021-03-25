const User = require('../model/User');
const error = require('../../../utils/error');

module.exports = async (data) =>{
    const user = await User.findByIdAndUpdate(data._id, data, {new: true});

    if(!user){
        throw await error([{msg: 'Usuario não encontrado na base de dados.'}])
    }

}