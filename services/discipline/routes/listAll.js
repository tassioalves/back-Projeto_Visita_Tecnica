const express = require('express');
const router = express.Router();
const listAll = require('../business/listAll');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, async (request, response) => {
    try {
        const page = new Number(request.params.page);
        const quantityPerPage = new Number(request.params.quantityPerPage);
        const user = request.user;
		const data = await listAll(user,page, quantityPerPage);

        response
            .status(200)
            .send(data);
    } catch (error) {
        response
            .status(400)
            .send(error);
    }
});

module.exports = router;
