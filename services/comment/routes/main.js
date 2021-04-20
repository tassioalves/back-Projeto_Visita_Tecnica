const create = require('./create');
const update = require('./update');
const remove = require('./remove');
const listByVisitId = require('./listByVisitId');

module.exports = [
    create,
    update,
    remove,
    listByVisitId
];