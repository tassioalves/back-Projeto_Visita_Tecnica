const Comment = require('../model/Comment');
const error = require('../../../utils/error');

module.exports = async (id, userId) => {
    const comment = await Comment.findOne({_id: id, active: true});

    if (comment.user != userId) {
        throw await error([{msg: 'Usuario não autorizado.!'}]);
    }

    if (!comment) {
        throw await error([{msg: 'Comentário não encontrado!'}]);
    }

    comment.active = false;
    comment.save();
};