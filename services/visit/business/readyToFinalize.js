module.exports = async (visit) =>{
    const today = new Date();
    if(today < visit.date){
       return false;
    }
    return true;
}
