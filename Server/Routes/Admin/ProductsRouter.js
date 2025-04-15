const express = require('express');
const router = express.Router();
const Productmodel = require('../../config/Models/Products.Model');

router.get("/", (req, res) => {
    Productmodel.find({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(500).json({ message: "Internal server error" });
    });
});
router.post("/create", async (req, res) => {
    const { Title, Author, specialPrice, regularPrice, description, category, quantity, rating, reviews, discount, brand, cover, Weight, Width, Length, Height, shipping, returns, availability } = req.body;

    const product = await Productmodel.create({
        Title,
        Author,
        specialPrice,
        regularPrice,
        description,
        category,
        quantity,
        rating,
        reviews,
        discount,
        brand,
        cover,
        Weight,
        Width,
        Length,
        Height,
        shipping,
        returns,
        availability
    });
    res.status(201).json({ message: "Product created successfully", product });
});

module.exports = router;
