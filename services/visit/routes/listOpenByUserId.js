const express = require('express');
const router = express.Router();
const listOpenByUserId = require('../business/listOpenByUserId');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.get('/list-by-user/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, validationProf, async (request, response) => {
  try {
    const userId = request.user.id;
    const page = new Number(request.params.page);
    const quantityPerPage = new Number(request.params.quantityPerPage);
    const visits = await listOpenByUserId(userId, page, quantityPerPage);

    response
      .status(200)
      .send(visits)
  } catch (error) {
    response
      .status(400)
      .send(error)
  }
});

module.exports = router;