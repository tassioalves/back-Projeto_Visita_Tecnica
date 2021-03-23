const express = require('express');
const router = express.Router();
const update = require('../business/update');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.put('/', servicesAuthenticator, validationProf, async (request, response)=>{
    try{
        const data = request.body;
        await update(data);

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