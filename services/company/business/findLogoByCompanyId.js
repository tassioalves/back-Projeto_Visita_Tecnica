const Company = require('../model/Company');
const error = require('../../../utils/error');

module.exports = async (id) => {
	const company = await Company.findOne({ _id: id, active: true });

	if (!company) {
		throw await error([{ msg: 'Empresa não encontrada na base de dados.' }])
	}

	let decodedImage = new Buffer(company.img, "base64");

	return decodedImage;
}
