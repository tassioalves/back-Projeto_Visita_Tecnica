const Course = require('../model/Course');
const error = require('../../../utils/error');

module.exports = async (data) =>{
    const course = await Course.findByIdAndUpdate(data._id, data, {new: true});

    if(!course){
        throw await error([{msg: 'Curso não encontrado na base de dados.'}])
    }

    return course;
}