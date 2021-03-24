const create = require('./create');
const listApprovedByVisit = require('./listApprovedByVisit');
const update = require('./update');
const listInAnalysisByVisit = require('./listInAnalysisByVisit');

module.exports = [
    create,
    update,
    listApprovedByVisit,
    listInAnalysisByVisit
];