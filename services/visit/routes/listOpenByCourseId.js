const express = require('express');
const router = express.Router();
const listOpenByCourseId = require('../business/listOpenByCourseId');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/list-by-course', servicesAuthenticator, async (request, response) => {
  try {
    const visits = await listOpenByCourseId(request.user);

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