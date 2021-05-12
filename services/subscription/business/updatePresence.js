const Subscription = require('../model/Subscription');
const error = require('../../../utils/error');
const statusEnum = require('../enum/status');

module.exports = async (data, userId) =>{
    const subscription = await Subscription.findById(
        {_id: data._id, active: true, status: statusEnum.APROVADA},
        {visit:0, active:0, __v:0}
        ).populate({
        path:'user',
        select:['name'],
        populate:{
            path:'course',
            select:['name']
            }
        });

    if (!subscription) {
        throw await error([{msg: 'Inscrição não encontrada na base de dados.'}]);
    }

    if(subscription.presence == null){
        subscription.presence = true;
    }
    subscription.presence = !subscription.presence;
    await subscription.save();
    return subscription;
}
