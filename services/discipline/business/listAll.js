const Discipline = require('../model/Discipline');

module.exports = async (user, page, quantityPerPage) => {
    const disciplines = await Discipline.find({ course: user.course, active: true,  })
        .limit(quantityPerPage)
        .skip(quantityPerPage * (page - 1))
        .sort({
            date: 'asc'
        });
    return disciplines;
};
