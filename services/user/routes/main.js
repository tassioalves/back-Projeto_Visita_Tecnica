const confirmationUser = require('./confirmationUser');
const authenticateUser = require('./authenticateUser');
const remove = require('./remove');
const create = require('./create');

module.exports = [
    confirmationUser,
    authenticateUser,
    remove,
    create
];