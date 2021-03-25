const confirmationUser = require('./confirmationUser');
const authenticateUser = require('./authenticateUser');
const listAll = require('./listAll');
const remove = require('./remove');
const create = require('./create');
const update = require('./update');

module.exports = [
    confirmationUser,
    authenticateUser,
    listAll,
    remove,
    create,
    update
];