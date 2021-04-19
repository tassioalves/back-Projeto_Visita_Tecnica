const Comments = require('../model/Comments');
const error = require('../../../utils/error');

module.exports = async (id) =>{
    const comments = await Comments.findOne({_id: id, active: true});

    if(!comments){
        throw await error([{msg: 'Comentário não encontrado na base de dados.'}])
    }

    return comments;
}