const express = require('express');
const router = express.Router();
const listAnalysisByVisit = require('../business/listAnalysisByVisit');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/list-analysi/visitId/:visitId', servicesAuthenticator, async (request, response) => {
  try {
    const subscriptions = await listAnalysisByVisit(request.params.visitId);
    
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