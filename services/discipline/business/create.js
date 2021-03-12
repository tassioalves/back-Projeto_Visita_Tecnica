const Discipline = require('../model/Discipline');
const error = require('../../../utils/error');

module.exports = async (data) => {
    let exists = await Discipline.exists({name: data.name, active: true});

    if(exists){
        throw await error([{msg: 'Disciplina ja cadastrada'}]);
    }

    let discipline = new Discipline(data);

    discipline.save();
};