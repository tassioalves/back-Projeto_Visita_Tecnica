const Visit = require('../model/Visit');
const statusEnum = require('../enum/status')

module.exports = async (user, page, quantityPerPage) => {
	const visits = await Visit.find({ user: user._id, status: statusEnum.FINALIZADA, active: true })
		.populate({
			path: 'company',
			select: ['-img'],
			populate: ['sector','discipline']
		})
		.populate('course')
		.limit(quantityPerPage)
		.skip(quantityPerPage * (page - 1))
		.sort({
			date: 'asc'
		});
	return visits;
}
