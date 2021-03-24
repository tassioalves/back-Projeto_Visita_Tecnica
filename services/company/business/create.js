const Company = require('../model/Company');
const error = require('../../../utils/error');

module.exports = async (data) => {
    let exists = await Company.exists({name: data.name, active: true});

    if(exists){
        throw await error([{msg: 'Empresa ja cadastrada'}]);
    }

    let encodedImage = data.img.replace("data:image/jpeg;base64,", "").replace("data:image/png;base64,", "");
    data.img = encodedImage;
    let company = new Company(data);

    company.save();
};