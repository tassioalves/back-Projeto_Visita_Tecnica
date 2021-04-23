const express = require('express');
const router = express.Router();
const visitAssessment = require('../business/visitAssessment');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.put('/visit/assessment', servicesAuthenticator, async (request, response)=>{
    try{
        const data = request.body;
        const userId = request.user.id;
        subscription = await visitAssessment(data, userId);

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