const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const createUserTemp = require('../business/createUserTemp');
const sendEmail = require('../business/sendEmail');
const validationEmail = require('../../../middlewares/validationEmail');
const error = require('../../../utils/error');

const validations = [
  check('email').isEmail(),
  check('password').isLength({ min: 6 })
];

router.post('/', validations, validationEmail, async (request, response) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw await error([{ msg: 'Dados Inválidos!' }]);
    }

    const data = request.body;
    await createUserTemp(data);
    await sendEmail(data.email);

    response
      .status(200)
      .json();
  } catch (error) {
    response
      .status(400)
      .send(error);
  }
});

module.exports = router;