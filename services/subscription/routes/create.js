const express = require('express');
const router = express.Router();
const create = require('../business/create');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.post('/', servicesAuthenticator, async (request, response) => {
    const data = request.body;
    try {
        await create(data);
        
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