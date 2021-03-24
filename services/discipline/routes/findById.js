const express = require('express');
const router = express.Router();
const findById = require('../business/findById');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.get('/id/:id', servicesAuthenticator, validationProf, async (request, response)=>{
    try{
        const id = request.params.id;
        const discipline = await findById(id);

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