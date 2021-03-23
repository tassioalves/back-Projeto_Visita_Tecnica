const express = require('express');
const router = express.Router();
const findLogoByCompanyId = require('../business/findLogoByCompanyId');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/id/:id/logo',async (request, response) => {
	try {
		console.log("Acessando imagens")
		const logo = await findLogoByCompanyId(request.params.id);

		response
			.status(200)
			.contentType('image/jpeg')
			.send(logo)
	} catch (error) {
		response
			.status(400)
			.send(error)
	}
});

module.exports = router;
