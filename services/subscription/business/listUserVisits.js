const Subscription = require('../model/Subscription');
const visitStatusEnum = require('../../visit/enum/status');
const subscriptionStatusEnum = require('../enum/status');

module.exports = async (userId, page, quantityPerPage) => {
    const filter = {
        active: true,
        user: userId,
        status: subscriptionStatusEnum.APROVADA,
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

    let subscriptions =
        await Subscription.find(filter,{active:0, __v:0})
            .populate(populateVisitAndCompany)
            .limit(quantityPerPage)
            .skip(quantityPerPage * (page - 1))
            .sort(sort);

    subscriptions = subscriptions.filter((sub)=>{
        if(sub.visit.status==visitStatusEnum.FINALIZADA){
            return sub;
        }
    })

    if (!subscriptions) {
        return subscriptions;
    }
    return subscriptions;
}
