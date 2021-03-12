const create = require('./create');
const findById = require('./findById');
const listAll = require('./listAll');
const remove = require('./remove');
const update = require('./update');

module.exports = [
    create,
    findById,
    listAll,
    remove,
    update
];