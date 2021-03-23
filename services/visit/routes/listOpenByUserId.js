const express = require('express');
const router = express.Router();
const listOpenByUserId = require('../business/listOpenByUserId');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.get('/list-by-user', servicesAuthenticator, validationProf, async (request, response) => {
  try {
    const visits = await listOpenByUserId(request.user.id);

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