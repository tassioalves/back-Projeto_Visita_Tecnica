const User = require('../model/User');

module.exports = async (page, quantityPerPage) => {
    const users = await User.find({active: true})
                                .limit(quantityPerPage)
                                .skip(quantityPerPage * (page - 1))
                                .sort({
                                date: 'asc'
                                });

    return users;
};