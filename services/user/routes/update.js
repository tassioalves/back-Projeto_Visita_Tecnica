const express = require('express');
const router = express.Router();
const update = require('../business/update');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.put('/', servicesAuthenticator, async (request, response)=>{
    try{
        const user = request.user;
        const data = request.body;
        await update(user, data);

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
