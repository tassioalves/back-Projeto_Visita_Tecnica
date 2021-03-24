const express = require('express');
const router = express.Router();
const confirmationUser = require('../business/confirmationUser');

router.get('confirmation/email/:email', async (request, response) => {
    try {
        const email = new String(request.params.email);
        await confirmationUser(email);
        
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