const Company = require('../model/Company');

module.exports = async (courseId, page, quantityPerPage) => {
  const company = await Company.find({ course: courseId, active: true,  }, { img: 0 })
                              .populate('discipline')
                              .populate('sector')
                              .populate('course')
                              .limit(quantityPerPage)
                              .skip(quantityPerPage * (page - 1))
                              .sort({
                                date: 'asc'
                              });
  return company;
};
