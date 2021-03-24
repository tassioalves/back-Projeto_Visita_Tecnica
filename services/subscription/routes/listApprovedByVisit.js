const express = require('express');
const router = express.Router();
const listApprovedByVisit = require('../business/listApprovedByVisit');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/list-approved/visitId/:visitId/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, async (request, response) => {
  try {
    const visitId = new String(request.params.visitId);
    const page = new Number(request.params.page);
    const quantityPerPage = new Number(request.params.quantityPerPage);
    const subscriptions = await listApprovedByVisit(visitId, page, quantityPerPage);
    
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