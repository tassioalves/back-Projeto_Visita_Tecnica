const listAll = require('./listAll');
const createCourse = require('./createCourse');
const findCourseById = require('./findCourseById');
const update = require('./update');
const remove = require('./remove');

module.exports = [
    listAll,
    createCourse,
    findCourseById,
    update,
    remove
];