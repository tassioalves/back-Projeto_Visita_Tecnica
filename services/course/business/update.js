const Course = require('../model/Course');
const error = require('../../../utils/error');

module.exports = async (data) =>{
    const course = await Course.findOne({_id: data._id, active: true});

    if(!course){
        throw await error([{msg: 'Curso não encontrado na base de dados.'}])
    }

    course.name = data.name;
    course.save();
    return course;
}