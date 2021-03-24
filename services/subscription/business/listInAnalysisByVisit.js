const Subscription = require('../model/Subscription');
const User = require('../../user/model/User')

module.exports = async (visitId, page, quantityPerPage) => {
    const subscriptions = await Subscription.find({ visit: visitId, status: 'EM ANALISE', active: true },{visit:0, _id:0, status:0, active:0, __v:0})    
                                            .populate('user')
                                            .limit(quantityPerPage)
                                            .skip(quantityPerPage * (page - 1))
                                            .sort({
                                            date: 'asc'
                                            });

    if (!subscriptions) {
        return subscriptions;
    }

    return subscriptions;
}