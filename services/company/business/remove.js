const Company = require('../model/Company');
const error = require('../../../utils/error');


module.exports = async (id) => {
    const company = await Company.findOne({_id: id, active: true});

    if (!company) {
        throw await error([{msg: 'Empresa não encontrada!'}]);
    }

    company.active = false;

    company.save();
};