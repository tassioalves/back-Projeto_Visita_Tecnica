const Course = require('../model/Course');
const error = require('../../../utils/error');


module.exports = async (id) => {
    const course = await Course.findOne({_id: id, active: true});

    if (!course) {
        throw await error([{msg: 'Curso não encontrado!'}]);
    }

    course.active = false;
    course.save();
};