const Visit = require('../model/Visit');
const Subscription = require('../../subscription/model/Subscription');
const status = require('../../subscription/enum/status');
const readyToFinalize = require('../business/readyToFinalize');

module.exports = async (user, page, quantityPerPage) => {
  const visits = await Visit.find({ course: user.course, status: 'ABERTA', active: true })
                            .populate({
                              path: 'company',
                              select: ['-img'],
                              populate: ['sector','discipline']
                            })
                            .populate('course')
                            .limit(quantityPerPage)
                            .skip(quantityPerPage * (page - 1))
                            .sort({
                            date: 'asc'
                            });

  if (!visits) {
    return visits;
  }

  let listVisits = [];

  for await (visit of visits) {
    let subscription = await Subscription.findOne({ visit: visit._id, user: user._id, active: true });

    let modelObjVisit;

    if (subscription) {
      modelObjVisit = {
        visit: visit,
        statusSubscription: subscription.status,
        subscription: subscription
      }
    } else {
      modelObjVisit = {
        visit: visit,
        statusSubscription: status.NAO_INSCRITO
      }
    }
    modelObjVisit.readyToFinalize = await readyToFinalize(visit);
    modelObjVisit.authorizedToEdit = visit.user._id.equals(user._id);
    listVisits.push(modelObjVisit);
  }

  return listVisits;
}
