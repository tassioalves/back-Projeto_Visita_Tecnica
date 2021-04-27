const Subscription = require('../model/Subscription');
const error = require('../../../utils/error');
const status = require('../enum/status');

module.exports = async (user, data) => {
    let exists = await Subscription.exists({visit: data.visit, user: user, active: true});

    if(exists){
        throw await error([{msg: 'Inscrição ja em andamento'}]);
    }

    data.user = user;
    let subscription = new Subscription(data);
    subscription.status = status.EM_ANALISE;
    await subscription.save();
    return subscription;
};
