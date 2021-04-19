const Comments = require('../model/Comments');
const error = require('../../../utils/error');


module.exports = async (id) => {
    const comments = await Comments.findOne({_id: id, active: true});

    if (!comments) {
        throw await error([{msg: 'Comentário não encontrado!'}]);
    }

    comments.active = false;
    comments.save();
};