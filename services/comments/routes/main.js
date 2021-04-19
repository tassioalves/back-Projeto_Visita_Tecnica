const listAll = require('./listAll');
const create = require('./create');
const findById = require('./findById');
const update = require('./update');
const remove = require('./remove');

module.exports = [
    listAll,
    create,
    findById,
    update,
    remove
];