const Subscription = require('../model/Subscription');
const error = require('../../../utils/error');

module.exports = async (user, data) => {
    let exists = await Subscription.exists({visit: data.visit, user: user, active: true});

    if(exists){
        throw await error([{msg: 'Inscrição ja em andamento'}]);
    }

    let subscription = new Subscription(data);
    subscription.user = user;

    subscription.save();
};
