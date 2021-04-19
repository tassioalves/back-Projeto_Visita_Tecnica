const comments = require('../model/Comments');
const error = require('../../../utils/error');

module.exports = async (data) =>{
    const comments = await Comments.findByIdAndUpdate(data._id, data, {new: true});

    if(!comments){
        throw await error([{msg: 'Comentário não encontrado na base de dados.'}])
    }

}