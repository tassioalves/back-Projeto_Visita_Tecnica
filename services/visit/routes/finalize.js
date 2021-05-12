const express = require('express');
const router = express.Router();
const finalize = require('../business/finalize');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.put('/finalize', servicesAuthenticator, validationProf, async (request, response)=>{
    try{
        const data = request.body;
        const userId = request.user.id;
        const visit = await finalize(data, userId);

        response
        .status(200)
        .send(visit)
    }catch(error){
        response
        .status(400)
        .send(error)
    }
});

module.exports = router;
