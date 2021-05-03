const Subscription = require('../model/Subscription');
const error = require('../../../utils/error');
const statusEnum = require('../enum/status');

module.exports = async (data, userId) =>{
    const subscription = await Subscription.findById(
        {_id: data._id, active: true},
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

    var status = statusEnum.EM_ANALISE

    if(subscription.status == statusEnum.EM_ANALISE){
        status = statusEnum.APROVADA
    }else if(subscription.status == statusEnum.APROVADA){
        status = statusEnum.RECUSADA
    }
    subscription.status = status;
    console.log(subscription);
    await subscription.save();

    return subscription;
}
