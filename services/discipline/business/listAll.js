const Discipline = require('../model/Discipline');

module.exports = async (page, quantityPerPage) => {
    const discipline = await Discipline.find({active: true})
                                        .populate('course')
                                        .limit(quantityPerPage)
                                        .skip(quantityPerPage * (page - 1))
                                        .sort({
                                        date: 'asc'
                                        });

    return discipline;
};