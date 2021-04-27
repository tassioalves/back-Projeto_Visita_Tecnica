const express = require('express');
const router = express.Router();
const updateStatus = require('../business/updateStatus');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.put('/status', servicesAuthenticator, validationProf, async (request, response)=>{
    try{
        const data = request.body;
        const subscription = await updateStatus(data);
        response
        .status(200)
        .send(subscription)
    }catch(error){
        response
        .status(400)
        .send(error)
    }
});

module.exports = router;
