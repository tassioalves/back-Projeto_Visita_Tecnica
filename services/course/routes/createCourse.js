const express = require('express');
const router = express.Router();
const createCourse = require('../business/createCourse');
const error = require('../../../utils/error');

router.post('/', async (request, response) => {
    const data = request.body;
    try {
        let course = await createCourse(data);
        
        response
            .status(200)
            .send(course);
    } catch (error) {
        response
            .status(400)
            .send(error);
    }
});

module.exports = router;