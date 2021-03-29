const User = require('../model/User');
const error = require('../../../utils/error');

module.exports = async (user, data) =>{
    await User.findByIdAndUpdate(user._id, data, {new: true});
    if(!user){
        throw await error([{msg: 'Usuario não encontrado na base de dados.'}])
    }
}
