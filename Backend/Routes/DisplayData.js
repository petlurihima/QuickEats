const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        if (global.foodItemsCache && global.foodCategoryCache) {
            res.send([global.foodItemsCache, global.foodCategoryCache]);
        } else {
            res.status(503).send("Data is still loading. Please try again later.");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;