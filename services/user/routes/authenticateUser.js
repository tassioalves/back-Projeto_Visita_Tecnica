const express = require('express');
const router = express.Router();
const authenticateUser = require('../business/authenticateUser');
const {check, validationResult} = require('express-validator');
const error = require('../../../utils/error');

const validations = [
    check('email').isEmail(),
    check('password').isLength({min: 8})
];

router.post('/authenticate', validations, async (request, response) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            throw await error([{msg: 'Dados Inválidos!'}]);
        }

        const data = request.body;
        const credentials = await authenticateUser(data);
        response
            .status(200)
            .json(credentials);
    } catch (errors) {
        response
            .status(400)
            .json(errors);
    }
});

module.exports = router;
