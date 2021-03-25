const Visit = require('../model/Visit');

module.exports = async (userId, page, quantityPerPage) => {
	const visits = await Visit.find({ user: userId, status: 'FINALIZADA', active: true })
                            .populate({
                              path: 'company',
                              select: '-img'})
                            .populate('course')
                            .limit(quantityPerPage)
                            .skip(quantityPerPage * (page - 1))
                            .sort({
                            date: 'asc'
                            });

	if (!visits) {
		return visits;
	}

	return visits;
}