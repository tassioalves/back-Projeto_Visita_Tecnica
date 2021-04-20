const express = require('express');
const router = express.Router();
const listByVisitId = require('../business/listByVisitId');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/visitId/:visitId/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, async (request, response) => {
  try {
    const page = new Number(request.params.page);
    const quantityPerPage = new Number(request.params.quantityPerPage);
    const visitId = request.params.visitId;
    
    const comments = await listByVisitId(visitId, page, quantityPerPage);

    response
      .status(200)
      .send(comments)
  } catch (error) {
    response
      .status(400)
      .send(error)
  }
});

module.exports = router;
