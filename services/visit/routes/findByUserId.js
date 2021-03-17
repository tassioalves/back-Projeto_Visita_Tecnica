const express = require('express');
const router = express.Router();
const findByUserId = require('../business/findByUserId');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, async (request, response) => {
	try {
		const page = new Number(request.params.page);
		const quantityPerPage = new Number(request.params.quantityPerPage);

		const visits = await findByUserId(request.user.id, page, quantityPerPage);

		response
			.status(200)
			.send(visits)
	} catch (error) {
		response
			.status(400)
			.send(error)
	}
});

module.exports = router;