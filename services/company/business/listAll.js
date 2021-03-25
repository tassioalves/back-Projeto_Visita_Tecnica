const Company = require('../model/Company');

module.exports = async (page, quantityPerPage) => {
  const company = await Company.find({ active: true }, { img: 0 })
                              .populate('discipline')
                              .populate('sector')
                              
                              .limit(quantityPerPage)
                              .skip(quantityPerPage * (page - 1))
                              .sort({
                                date: 'asc'
                              });
  return company;
};
