const Visit = require('../model/Visit');
const error = require('../../../utils/error');


module.exports = async (visitId, userId) => {
    const visit = await Visit.findOne({_id: visitId, active: true});

    if (!visit) {
        throw await error([{msg: 'Visita não encontrada na base de dados'}]);
    }

    if(visit.user != userId){
        throw await error([{msg: 'Usuario não autorizado'}])
    }
    
    visit.active = false;

    visit.save();
};