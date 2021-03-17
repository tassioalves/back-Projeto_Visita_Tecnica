const Visit = require('../model/Visit');
const error = require('../../../utils/error');

module.exports = async (user, data) => {
    let exists = await Visit.exists({company: data.company, date: data.date, active: true});

    if(exists){
        throw await error([{msg: 'Já existe uma visita cadastrada para esta mesma empresa neste mesmo dia'}]);
    }

    let visit = new Visit(data);
    visit.user = user;
    visit.save();
};