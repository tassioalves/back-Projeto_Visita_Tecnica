const create = require('./create');
const findByUserId = require('./findByUserId');
const update = require('./update');
const remove = require('./remove');

module.exports = [
    create,
    findByUserId,
    update,
    remove
];