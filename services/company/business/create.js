const Company = require('../model/Company');
const error = require('../../../utils/error');

module.exports = async (data) => {
    let exists = await Company.exists({name: data.name, active: true});

    if(exists){
        throw await error([{msg: 'Empresa ja cadastrada'}]);
    }

    let company = new Company(data);

    company.save();
};