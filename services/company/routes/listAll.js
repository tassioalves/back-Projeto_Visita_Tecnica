const express = require('express');
const listAll = require('../business/listAll');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const router = express.Router();

router.get('/', servicesAuthenticator, async (request, response) => {
	try {
		const data = await listAll();

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