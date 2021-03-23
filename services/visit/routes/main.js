const create = require('./create');
const listOpenByUserId = require('./listOpenByUserId');
const listOpenByCourseId = require('./listOpenByCourseId');
const update = require('./update');
const remove = require('./remove');

module.exports = [
    create,
    listOpenByUserId,
    listOpenByCourseId,
    update,
    remove
];