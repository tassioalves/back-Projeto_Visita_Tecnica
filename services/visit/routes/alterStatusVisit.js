const express = require('express');
const router = express.Router();
const alterStatusVisit = require('../business/alterStatusVisit');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.put('/alter-status', servicesAuthenticator, validationProf, async (request, response)=>{
    try{
        const data = request.body;
        const userId = request.user.id;
        await alterStatusVisit(data, userId);

        response
        .status(200)
        .send()
    }catch(error){
        response
        .status(400)
        .send(error)
    }
});

module.exports = router;
