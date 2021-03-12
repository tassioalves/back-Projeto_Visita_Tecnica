const create = require('./create');
const listAll = require('./listAll');
const findById = require('./findById');
const update = require('./update');
const remove = require('./remove');

module.exports = [
    create,
    listAll,
    findById,
    update,
    remove
];