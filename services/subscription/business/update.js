const Subscription = require('../model/Subscription');
const Visit = require('../../visit/model/Visit');
const error = require('../../../utils/error');

module.exports = async (data) => {
  const subscription = await Subscription.findByIdAndUpdate(data._id, data, { new: true });

  if (!subscription) {
    throw await error([{ msg: 'Inscrição não encontrada na base de dados.' }])
  }
  console.log("oo")
  if (data.status === 'APROVADA') {
    console.log("sss")
    let visit = await Visit.findOne({ _id: data.visit, active: true });
    console.log("22")
    visit.vacancies --;
    console.log("1")
    visit.save();
  }

  return subscription;
}