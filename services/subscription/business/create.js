const Subscription = require('../model/Subscription');
const error = require('../../../utils/error');

module.exports = async (user, data) => {
    console.log(data);
    let exists = await Subscription.exists({visit: data.visit, user: user, active: true});

    if(exists){
        throw await error([{msg: 'Inscrição ja em andamento'}]);
    }
    data.user = user;
    let subscription = new Subscription(data);
    console.log(subscription);
    subscription.save();
};
