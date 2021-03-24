const express = require('express');
const router = express.Router();
const remove = require('../business/remove');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.delete('/id/:id', servicesAuthenticator, async (request, response) =>{
    try{
        const id = request.params.id;
        const user = request.user;

        await remove(id, user);
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