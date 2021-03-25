const Subscription = require('../model/Subscription');
const error = require('../../../utils/error');

module.exports = async (id, userId) => {
    const subscription = await Subscription.findOne({_id: id, active: true});

    if (!subscription) {
        throw await error([{msg: 'Inscrição não localizada!'}]);
    }

    if (userId != subscription.user) {
        throw await error([{msg: 'Usuario não autorizado!'}]);
    }

    subscription.active = false;
    subscription.save();
};
