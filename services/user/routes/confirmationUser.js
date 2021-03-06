const express = require('express');
const router = express.Router();
const createUser = require('../business/createUser');
const error = require('../../../utils/error');

router.get('/email/:email', async (request, response) => {
    const data = request.body;
    const email = new String(request.params.email);
    try {
        await createUser(email);
        
        response
            .status(200)
            .send();
    } catch (e) {
        response
            .status(400)
            .send(e);
    }
});

module.exports = router;