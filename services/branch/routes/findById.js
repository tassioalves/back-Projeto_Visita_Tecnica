const express = require('express');
const router = express.Router();
const findById = require('../business/findById');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/id/:id', servicesAuthenticator, async (request, response)=>{
    try{
        const discipline = await findById(request.params.id);

        response
        .status(200)
        .send(discipline)
    }catch(error){
        response
        .status(400)
        .send(error)
    }
});

module.exports = router;