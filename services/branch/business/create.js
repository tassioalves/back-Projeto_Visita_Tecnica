const Branch = require('../model/Branch');
const error = require('../../../utils/error');

module.exports = async (data) => {
    let exists = await Branch.exists({name: data.name, active: true});

    if(exists){
        throw await error([{msg: 'Ramo ja cadastrado'}]);
    }

    let branch = new Branch(data);

    branch.save();
};