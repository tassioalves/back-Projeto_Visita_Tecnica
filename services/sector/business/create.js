const Sector = require('../model/Sector');
const error = require('../../../utils/error');

module.exports = async (data) => {
    let exists = await Sector.exists({name: data.name, active: true});

    if(exists){
        throw await error([{msg: 'Setor ja cadastrado'}]);
    }

    let sector = new Sector(data);

    sector.save();
};