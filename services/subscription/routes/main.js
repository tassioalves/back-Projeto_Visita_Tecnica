const create = require('./create');
const listApprovedByVisit = require('./listApprovedByVisit');
const update = require('./update');
const listInAnalysisByVisit = require('./listInAnalysisByVisit');
const listSubscriptionByVisitId = require('./listSubscriptionsByVisitId');
const listUserVisits = require('./listUserVisits');
const remove = require('./remove');
const visitAssesment = require('./visitAssessment');
const updateStatus = require('./updateStatus');
const updatePresence = require('./updatePresence');

module.exports = [
    create,
    update,
    updateStatus,
    updatePresence,
    remove,
    listApprovedByVisit,
    listInAnalysisByVisit,
    listSubscriptionByVisitId,
    listUserVisits,
    visitAssesment
];
