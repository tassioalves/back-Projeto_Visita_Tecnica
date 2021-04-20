const Comment = require('../model/Comment');

module.exports = async (visitId, page, quantityPerPage) => {
	const comments = await Comment.find({ visit: visitId, active: true })
                            .populate({
                              path:'user',
                              select:['-__v','-password']})
                            .limit(quantityPerPage)
                            .skip(quantityPerPage * (page - 1))
                            .sort({
                            date: 'asc'
                            });
	return comments;
}