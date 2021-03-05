const sendEmail = require('../../../utils/email');

module.exports = async (email) => {
   return await sendEmail(email);
};