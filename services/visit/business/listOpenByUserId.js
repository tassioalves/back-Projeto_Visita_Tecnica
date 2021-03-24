const Visit = require('../model/Visit');

module.exports = async (userId, page, quantityPerPage) => {
	const visits = await Visit.find({ user: userId, status: 'ABERTA', active: true })
								.populate('company')
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