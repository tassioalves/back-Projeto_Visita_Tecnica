const Visit = require('../model/Visit');
const Company = require('../../company/model/Company')
const Course = require('../../course/model/Course');
const Subscription = require('../../subscription/model/Subscription');

module.exports = async (user) => {
  const visits = await Visit.find({ course: user.course, active: true, status: 'ABERTA' });

  if (!visits) {
    return visits;
  }

  let listVisits = [];

  for await (visit of visits) {
    let company = await Company.findOne({ _id: visit.company, active: true });
    let course = await Course.findOne({ _id: visit.course, active: true });
    visit.company = company;
    visit.course = course;

    let subscription = await Subscription.findOne({ visit: visit._id, user: user._id, active: true });

    let modelObjVisit;
    if (subscription) {
      modelObjVisit = {
        visit: visit,
        statusSubscription: subscription.status
      }
    } else {
      modelObjVisit = {
        visit: visit,
        statusSubscription: false
      }
    }

    listVisits.push(modelObjVisit);
  }


  return listVisits;
}