const express = require('express');
const router = express.router();
const {check, validationResult} = require('express-validator');
const createUser = require('../business/createUser');
const error = require('../../../utils/error');

const validations = [
    check('email').isEmail(),
    check('password').isLength({min: 8})
];

router.post('/', validations, async (request, response) => {
    const data = request.data;
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            throw await error([{msg: 'Dados Inválidos!'}]);
        }
        await createUser(data);
        response
            .status(200)
            .send();
    } catch (error) {
        response
            .status(400)
            .json(error);
    }
});

module.exports = router;