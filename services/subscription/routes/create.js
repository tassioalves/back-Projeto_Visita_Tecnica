const express = require('express');
const router = express.Router();
const create = require('../business/create');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.post('/', servicesAuthenticator, async (request, response) => {
    try {
        const data = request.body;
        const subscription = await create(request.user, data);

        response
            .status(200)
            .send(subscription);
    } catch (error) {
        console.log(error)
        response
            .status(400)
            .send(error);
    }
});

module.exports = router;
