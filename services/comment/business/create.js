const Comment = require('../model/Comment');
const error = require('../../../utils/error');

module.exports = async (data, user) => {

    let comment = new Comment(data);
    comment.user = user.id;
    comment.save();
};