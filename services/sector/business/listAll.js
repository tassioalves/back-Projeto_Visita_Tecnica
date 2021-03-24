const Sector = require('../model/Sector');

module.exports = async (page, quantityPerPage) => {
    const sector = await Sector.find({active: true})
                                .limit(quantityPerPage)
                                .skip(quantityPerPage * (page - 1))
                                .sort({
                                date: 'asc'
                                });

    return sector;
};