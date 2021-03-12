const Discipline = require('../model/Discipline');
const error = require('../../../utils/error');

module.exports = async (data) =>{
    const discipline = await Discipline.findOne({_id: data._id, active: true});

    if(!discipline){
        throw await error([{msg: 'Disciplina não encontrada na base de dados.'}])
    }

    discipline.name = data.name;
    discipline.save();
}