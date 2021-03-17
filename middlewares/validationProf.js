const error = require('../utils/error');
const role = require('../services/user/enum/role');

module.exports = async (request, response, next) => {
    try {
        const user = request.user;
        if (role.PROFESSOR != user.role) {
            throw await error([{msg: 'Usuario não autorizado!'}]);
        }
        next();
    } catch (e) {
        response
            .status(401)
            .send(e)
    }
};