const express = require('express');
const router = express.Router();
const listApprovedByVisit = require('../business/listApprovedByVisit');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/list-approved/visitId/:visitId', servicesAuthenticator, async (request, response) => {
  try {
    const subscriptions = await listApprovedByVisit(request.params.visitId);
    
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