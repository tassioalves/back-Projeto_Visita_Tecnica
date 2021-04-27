const Subscription = require('../model/Subscription');

module.exports = async (userId, page, quantityPerPage) => {
    const filter = {
        active: true,
        user: userId,
        status: 'APROVADA'
    }

    const populateVisitAndCompany = {
        path:'visit',
        populate:{
            path:'company',
            select:['name','city','state'],
            populate:'sector'
        }
    }

    const sort ={
        date: 'asc'
    }

    const subscriptions =
        await Subscription.find(filter,{active:0, __v:0})
            .populate(populateVisitAndCompany)
            .limit(quantityPerPage)
            .skip(quantityPerPage * (page - 1))
            .sort(sort);

    if (!subscriptions) {
        return subscriptions;
    }
    return subscriptions;
}
