const express = require('express');
const router = express.Router();
const remove = require('../business/remove');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationProf = require('../../../middlewares/validationProf');

router.delete('/id/:id', servicesAuthenticator, validationProf, async (request, response)=>{
    try{
        const id = request.params.id;
        const userId = request.user.id;
        await remove(id, userId);

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