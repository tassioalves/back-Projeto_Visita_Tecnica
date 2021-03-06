const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const createUserTemp = require('../business/createUserTemp');
const sendEmail = require('../business/sendEmail');
const error = require('../../../utils/error');

const validations = [
  check('email').isEmail(),
  check('password').isLength({ min: 6 })
];

router.post('/', validations, async (request, response) => {
  const data = request.body;
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw await error([{ msg: 'Dados Inválidos!' }]);
    }

    let emailSplit = data.email.split('@');
    console.log(emailSplit[1]);
    if (!emailSplit[1] == 'ifms.edu.br' || !emailSplit[1] == 'estudante.ifms.edu.br') {
      throw await error([{ msg: 'Email Inválido!' }]);
    }

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