const Discipline = require('../model/Discipline');

module.exports = async () => {
    const discipline = await Discipline.find({active: true});

    return discipline;
};