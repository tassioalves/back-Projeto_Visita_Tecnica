const Company = require('../model/Company');
const error = require('../../../utils/error');

module.exports = async (id) => {
	const company = await Company.findOne({ _id: id, active: true });

	if (!company) {
		throw await error([{ msg: 'Empresa não encontrada na base de dados.' }])
	}

	let encodedImage = company.img.replace("data:image/jpeg;base64,", "").replace("data:image/png;base64,", "");
	let decodedImage = new Buffer(encodedImage, "base64");

	return decodedImage;
}
