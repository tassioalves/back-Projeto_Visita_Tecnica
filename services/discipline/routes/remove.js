const express = require('express');
const router = express.Router();
const remove = require('../business/remove');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.delete('/id/:id', servicesAuthenticator, async (request, response)=>{
    try{
        const id = request.params.id;
        await remove(id);

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