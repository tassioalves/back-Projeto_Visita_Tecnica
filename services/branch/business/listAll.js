const Branch = require('../model/Branch');

module.exports = async () => {
    const branch = await Branch.find({active: true});

    return branch;
};