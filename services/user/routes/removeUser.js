const { request, response } = require('express');
const express = require('express');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const router = express.Router();
const removeUser = require('../business/removeUser');


router.delete('/id/:id', servicesAuthenticator, async (request, response) =>{
    try{
        await removeUser(request.params.id);
        response
            .status(200)
            .send()
    }catch(errors){
        response
            .status(400)
            .json(errors)
    }
})

module.exports = router;