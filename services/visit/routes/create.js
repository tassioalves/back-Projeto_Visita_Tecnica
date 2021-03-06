const express = require('express');
const router = express.Router();
const create = require('../business/create');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.post('/', servicesAuthenticator, validationProf, async (request, response) => {
    try {
        const data = request.body;
        const user = request.user;
        await create(user, data);
        
        response
            .status(200)
            .send();
    } catch (error) {
        response
            .status(400)
            .send(error);
    }
});

module.exports = router;