const create = require('./create');
const listApprovedByVisit = require('./listApprovedByVisit');
const update = require('./update');
const listInAnalysisByVisit = require('./listInAnalysisByVisit');
const listSubscriptionByVisitId = require('./listSubscriptionsByVisitId');
const listUserVisits = require('./listUserVisits');
const remove = require('./remove');
const visitAssesment = require('./visitAssessment');
const updateStatus = require('./updateStatus');

module.exports = [
    create,
    update,
    updateStatus,
    remove,
    listApprovedByVisit,
    listInAnalysisByVisit,
    listSubscriptionByVisitId,
    listUserVisits,
    visitAssesment
];
