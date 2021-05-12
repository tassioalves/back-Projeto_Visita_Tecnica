const express = require('express');
const router = express.Router();
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const generateCertificate = require('../business/generateCertificate');

router.get('/id/:subscriptionId/certificate/', servicesAuthenticator, async (request, response) => {
  try {
    const subscriptionId = new String(request.params.subscriptionId);
    const user = request.user;
    const certificate = await generateCertificate(user,subscriptionId);
    response.setHeader('Content-disposition', 'attachment; filename=certificate.pdf');
    response.setHeader('Content-type', 'application/pdf');
    certificate.pipe(response);
    certificate.end();
  } catch (error) {
    response
      .status(400)
      .send(error)
  }
});

module.exports = router;
