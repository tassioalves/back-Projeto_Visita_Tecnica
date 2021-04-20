const express = require('express');
const router = express.Router();
const listByCourseId = require('../business/listByCourseId');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/courseId/:courseId/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, async (request, response) => {
	try {
		const page = new Number(request.params.page);
    const quantityPerPage = new Number(request.params.quantityPerPage);
    const courseId = request.params.courseId;

		const data = await listByCourseId(courseId, page, quantityPerPage);

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
