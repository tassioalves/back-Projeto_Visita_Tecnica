const express = require('express');
const router = express.Router();
const listAll = require('../business/listAll');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.get('/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, validationProf, async (request, response) => {
  try {
    const page = new Number(request.params.page);
    const quantityPerPage = new Number(request.params.quantityPerPage);
    const data = await listAll(page, quantityPerPage);

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