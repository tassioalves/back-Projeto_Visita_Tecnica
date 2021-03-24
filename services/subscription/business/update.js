const Subscription = require('../model/Subscription');
const Visit = require('../../visit/model/Visit');
const error = require('../../../utils/error');

module.exports = async (data, userId) => {
  const subscr = await Subscription.findById({_id: data._id, active: true});

  if (subscr.user != userId) {
    throw await error([{ msg: 'Usuario nao autorizado.' }]);
  }

  const subscription = await Subscription.findByIdAndUpdate(data._id, data, { new: true });

  if (!subscription) {
    throw await error([{msg: 'Inscrição não encontrada na base de dados.'}]);
  }
  if (data.status === 'APROVADA') {
    let visit = await Visit.findById({ _id: data.visit, active: true });
    visit.vacancies --;
    visit.save();
  }

}