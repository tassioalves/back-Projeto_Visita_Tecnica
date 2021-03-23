const Subscription = require('../model/Subscription');
const User = require('../../user/model/User')

module.exports = async (visitId) => {
    const subscriptions = await Subscription.find({ visit: visitId, status: 'APROVADA', active: true });

    if (!subscriptions) {
        return subscriptions;
    }

    for await (subscription of subscriptions) {
        let user = await User.findOne({ _id: subscription.user, active: true });
        subscription.user = user;
    }

    return subscriptions;
}