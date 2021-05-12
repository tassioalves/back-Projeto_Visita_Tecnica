const express =   require('express');
const router = express.Router();
const listOpenByCourseId = require('../business/listOpenByCourseId');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/list-by-course/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, async (request, response) => {
  try {
    const user = request.user;
    const page = new Number(request.params.page);
    const quantityPerPage = new Number(request.params.quantityPerPage);
    const visits = await listOpenByCourseId(user, page, quantityPerPage);

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
