const Subscription = require('../model/Subscription');

module.exports = async (visitId, page, quantityPerPage) => {


    const subscriptions = await Subscription.find({ visit: visitId, status: 'APROVADA', active: true },
                                                    {active:0, __v:0})
                                            .populate({
                                                path:'user',
                                                select:['name'],
                                                populate:{
                                                    path:'course',
                                                    select:['name']
                                                }
                                            })
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
