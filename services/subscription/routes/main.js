const create = require('./create');
const listApprovedByVisit = require('./listApprovedByVisit');
const update = require('./update');
const listInAnalysisByVisit = require('./listInAnalysisByVisit');
const listUserVisits = require('./listUserVisits');
const remove = require('./remove');
const visitAssesment = require('./visitAssessment');

module.exports = [
    create,
    update,
    remove,
    listApprovedByVisit,
    listInAnalysisByVisit,
    listUserVisits,
    visitAssesment
];
