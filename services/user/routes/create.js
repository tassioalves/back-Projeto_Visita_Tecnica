const express = require('express');
const create = require('../business/create');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const error = require('../../../utils/error');

const validations = [
    check('email').isEmail(),
    check('password').isLength({min: 6})
];

router.post('/', validations, async (request, response) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            throw await error([{msg:'Dados Inválidos!'}]);
        }

        const data = request.body;
        await create(data);
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