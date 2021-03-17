const create = require('./create');
const update = require('./update');
const remove = require('./remove');
const listAll = require('./listAll');
const findById = require('./findById');

module.exports = [
    create,
    update,
    remove,
    listAll,
    findById
];