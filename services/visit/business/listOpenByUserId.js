const Visit = require('../model/Visit');
const Company = require('../../company/model/Company')
const Course = require('../../course/model/Course');

module.exports = async (id) => {
	const visits = await Visit.find({ user: id, active: true, status: 'ABERTA' });

	if (!visits) {
		return visits;
	}

	for await (visit of visits) {
		let company = await Company.findOne({ _id: visit.company, active: true });
		let course = await Course.findOne({ _id: visit.course, active: true });
		visit.company = company;
		visit.course = course;
	}

	return visits;
}