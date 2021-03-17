const Company = require('../model/Company');

module.exports = async () => {
    const company = await Company.find({active: true});

    return company;
};