const Subscription = require('../model/Subscription');

module.exports = async (userId, page, quantityPerPage) => {
    const filter = {
        active: true,
        user: userId
    }

    const populateVisitAndCompany = {
        path:'visit',
        populate:{
            path:'company',
            select:['name','city','state'],
            populate:'sector'
        }
    }

    const populateUser = {
        path:'user',
        select:'name'
    }

    const sort ={
        date: 'asc'
    }

    const subscriptions =
        await Subscription.find(filter)
            .populate(populateVisitAndCompany)
            .populate(populateUser)
            .limit(quantityPerPage)
            .skip(quantityPerPage * (page - 1))
            .sort(sort);

    if (!subscriptions) {
        return subscriptions;
    }

    return subscriptions;
}
