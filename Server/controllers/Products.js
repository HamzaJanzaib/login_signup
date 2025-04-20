const Productmodel = require("../config/Models/Products.Model");

module.exports.NewProduct =  async (req, res) => {
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
}