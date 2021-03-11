const Course = require('../model/Course');
const error = require('../../../utils/error');

module.exports = async (data) => {
    let exists = await Course.exists({name: data.name});

    if(exists){
        throw await error([{msg: 'Curso ja cadastrado'}]);
    }

    let course = new Course(data);

    course.save();
    return course;
};