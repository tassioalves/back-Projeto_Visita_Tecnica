const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const createUser = require('../business/createUser');
const error = require('../../../utils/error');

const validations = [
    check('email').isEmail(),
    check('password').isLength({min: 6})
];

router.get('/email/:email', async (request, response) => {
    const data = request.body;
    const email = new String(request.params.email);
    try {
        // const errors = validationResult(request);
        // if (!errors.isEmpty()) {
        //     throw await error([{msg: 'Dados Inválidos!'}]);
        // }
        console.log('confirmacao : '+email);
        await createUser(email);
        console.log('passou');
        response
            .status(200)
            .send();
    } catch (e) {
        response
            .status(400)
            .send(e);
    }
});

module.exports = router;