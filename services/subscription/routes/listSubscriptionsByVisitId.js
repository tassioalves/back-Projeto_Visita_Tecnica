const express = require('express');
const router = express.Router();
const listSubscriptionsByVisitId = require('../business/listSubscriptionsByVisitId');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.get('/visitId/:visitId/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, validationProf, async (request, response) => {
  try {
    const visitId = new String(request.params.visitId);
    const page = new Number(request.params.page);
    const quantityPerPage = new Number(request.params.quantityPerPage);
    const subscriptions = await listSubscriptionsByVisitId(visitId, page, quantityPerPage);

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
