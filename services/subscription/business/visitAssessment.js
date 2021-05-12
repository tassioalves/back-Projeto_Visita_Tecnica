const Subscription = require('../model/Subscription');
const Visit = require('../../visit/model/Visit');
const error = require('../../../utils/error');

module.exports = async (data) => {

  if (data.assessment > 5) {
    data.assessment = 5;
  }

  if (data.assessment < 0) {
    data.assessment = 0;
  }

  const subscription = await Subscription.findByIdAndUpdate(data._id, data, { new: true });

  if (!subscription) {
    throw await error([{msg: 'Inscrição não encontrada na base de dados.'}]);
  }
  return subscription;

}
