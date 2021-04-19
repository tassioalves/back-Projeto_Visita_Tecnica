const Comments = require('../model/Comments');

module.exports = async (page, quantityPerPage) => {
    const commentss = await Comments.find({active: true})
                                .limit(quantityPerPage)
                                .skip(quantityPerPage * (page - 1))
                                .sort({
                                date: 'asc'
                                });

    return commentss;
};