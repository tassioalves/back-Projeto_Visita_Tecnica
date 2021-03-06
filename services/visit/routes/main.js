const create = require('./create');
const listOpenByUserProfId = require('./listOpenByUserProfId');
const listOpenByCourseId = require('./listOpenByCourseId');
const listClosedByUserProfId = require('./listClosedByUserProfId');
const update = require('./update');
const remove = require('./remove');
const finalize = require('./finalize');
const alterStatusVisit = require('./alterStatusVisit');

module.exports = [
    create,
    listOpenByUserProfId,
    listOpenByCourseId,
    listClosedByUserProfId,
    update,
    remove,
    finalize,
    alterStatusVisit
];
