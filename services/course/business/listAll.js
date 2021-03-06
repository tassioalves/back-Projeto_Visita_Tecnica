const Course = require('../model/Course');

module.exports = async (page, quantityPerPage) => {
    const courses = await Course.find({active: true})
                                .limit(quantityPerPage)
                                .skip(quantityPerPage * (page - 1))
                                .sort({
                                date: 'asc'
                                });

    return courses;
};