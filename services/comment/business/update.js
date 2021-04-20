const Comment = require('../model/Comment');
const error = require('../../../utils/error');

module.exports = async (data, userId) =>{
    const comments = await Comment.findByIdAndUpdate(data._id, data, {new: true});

    if (comments.user != userId) {
        throw await error([{msg: 'Usuario não autorizado.'}])
    }

    if(!comments){
        throw await error([{msg: 'Comentário não encontrado na base de dados.'}]);
    }

}