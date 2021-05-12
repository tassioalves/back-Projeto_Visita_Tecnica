const express = require('express');
const router = express.Router();
const updatePresence = require('../business/updatePresence');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.put('/presence', servicesAuthenticator, validationProf, async (request, response)=>{
    try{
        const data = request.body;
        const subscription = await updatePresence(data);
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
