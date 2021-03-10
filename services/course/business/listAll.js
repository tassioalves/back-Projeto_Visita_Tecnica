const Course = require('../model/Course');

module.exports = async () => {
    const courses = await Course.find({active: true});

    return courses;
};