const express = require('express');
const router = express.Router();
const findCourseById = require('../business/findCourseById');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/id/:id', servicesAuthenticator, async (request, response)=>{
    try{
        const course = await findCourseById(request.params.id);

        response
        .status(200)
        .send(course)
    }catch(error){
        response
        .status(400)
        .send(error)
    }
});

module.exports = router;