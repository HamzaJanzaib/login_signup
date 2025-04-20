const express = require('express');
const router = express.Router();
const Productmodel = require('../../config/Models/Products.Model');
const { NewProduct } = require('../../controllers/Products');
const { ValidProduct } = require('../../Middleware/VaildProduct');

router.get("/", (req, res) => {
    Productmodel.find({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(500).json({ message: "Internal server error" });
    });
});

router.post("/NewProduct", ValidProduct, NewProduct);

module.exports = router;
