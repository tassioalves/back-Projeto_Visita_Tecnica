const create = require('./create');
const listApprovedByVisit = require('./listApprovedByVisit');
const update = require('./update');
const listAnalysisByVisit = require('./listInAnalysisByVisit');

module.exports = [
    create,
    update,
    listApprovedByVisit,
    listAnalysisByVisit
];