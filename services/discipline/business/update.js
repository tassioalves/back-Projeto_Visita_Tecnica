const Discipline = require('../model/Discipline');
const error = require('../../../utils/error');

module.exports = async (data) =>{
    const discipline = await Discipline.findByIdAndUpdate(data._id, data, {new: true});

    if(!discipline){
        throw await error([{msg: 'Disciplina não encontrada na base de dados.'}])
    }

    discipline.save();
}