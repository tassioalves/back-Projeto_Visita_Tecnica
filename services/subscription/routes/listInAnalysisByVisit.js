const express = require('express');
const router = express.Router();
const listInAnalysisByVisit = require('../business/listInAnalysisByVisit');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.get('/list-analysi/visitId/:visitId/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, validationProf, async (request, response) => {
  try {
    const visitId = new String(request.params.visitId);
    const page = new Number(request.params.page);
    const quantityPerPage = new Number(request.params.quantityPerPage);
    const subscriptions = await listInAnalysisByVisit(visitId, page, quantityPerPage);
    
    response
      .status(200)
      .send(subscriptions)
  } catch (error) {
    response
      .status(400)
      .send(error)
  }
});

module.exports = router;