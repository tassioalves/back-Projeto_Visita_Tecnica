const Company = require('../model/Company');
const error = require('../../../utils/error');

module.exports = async (id) => {
	const company = await Company.findOne({ _id: id, active: true },{img:0})
																.populate('discipline')
																.populate('sector')
																.populate('course');

	if (!company) {
		throw await error([{ msg: 'Empresa não encontrada na base de dados.' }])
	}

	return company;
}