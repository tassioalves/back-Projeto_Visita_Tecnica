const Subscription = require('../model/Subscription');
const error = require('../../../utils/error');

module.exports = async (data) => {
    let exists = await Subscription.exists({visit: data.visit, user: data.user, active: true});

    if(exists){
        throw await error([{msg: 'Inscrição ja em andamento'}]);
    }

    let subscription = new Subscription(data);

    subscription.save();
};