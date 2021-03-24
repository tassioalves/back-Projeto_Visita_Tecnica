const Discipline = require('../model/Discipline');
const error = require('../../../utils/error');


module.exports = async (id) => {
    const discipline = await Discipline.findOne({_id: id, active: true});

    if (!discipline) {
        throw await error([{msg: 'Disciplina não encontrada!'}]);
    }

    discipline.active = false;
    discipline.save();
};