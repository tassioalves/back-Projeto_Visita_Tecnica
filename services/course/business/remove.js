const Course = require('../model/Course');
const error = require('../../../utils/error');


module.exports = async (id) => {
    const course = await Course.findOne({_id: id, active: true});

    if (!course) {
        throw await error([{msg: 'Curso não encontrado!'}]);
    }

    // if (userId != device.userId) {
    //     throw await error([{msg: 'Usuario não autorizado!'}]);
    // }

    course.active = false;

    course.save();
};