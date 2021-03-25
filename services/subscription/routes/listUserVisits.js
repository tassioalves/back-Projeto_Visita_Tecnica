const express = require('express');
const router = express.Router();
const listUserVisits = require('../business/listUserVisits')
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, async (request, response) => {
  try {
    const page = new Number(request.params.page);
    const quantityPerPage = new Number(request.params.quantityPerPage);
    const subscriptions = await listUserVisits(request.user._id, page, quantityPerPage);

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
