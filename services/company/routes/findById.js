const express = require('express');
const router = express.Router();
const findById = require('../business/findById');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/id/:id', servicesAuthenticator, async (request, response) => {
	try {
		const id = request.params.id;
		const course = await findById(id);

		response
			.status(200)
			.send(course)
	} catch (error) {
		response
			.status(400)
			.send(error)
	}
});

module.exports = router;