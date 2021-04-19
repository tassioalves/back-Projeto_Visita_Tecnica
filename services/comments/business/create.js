const Comments = require('../model/Comments');
const error = require('../../../utils/error');

module.exports = async (data) => {
    let exists = await Comments.exists({name: data.name, active: true});

    if(exists){
        throw await error([{msg: 'Comentário ja cadastrado'}]);
    }

    let comments = new Comments(data);

    comments.save();
};