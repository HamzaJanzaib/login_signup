module.exports.ValidProduct = (req, res, next) => {
    const { Title, Author, regularPrice, category, brand, Weight, Width, Length, Height, quantity, description, specialPrice } = req.body;
    if (!Title || !Author || !regularPrice || !category || !brand || !Weight || !Width || !Length || !Height || !quantity || !description || !specialPrice) {
        return res.status(400).json({ message: "Please fill in all required fields" });
    }

    if (Title.length < 4 || Author.length < 4) {
        return res.status(400).json({ message: "Title and Author must be at least 4 characters" });
    }

    if (regularPrice <= 0 || specialPrice <= 0) {
        return res.status(400).json({ message: "Regular price and special price must be greater than 0" });
    }

    if (specialPrice >= regularPrice) {
        return res.status(400).json({ message: "Special price must be less than regular price" });
    }

    if(quantity <= 5){
        return res.status(400).json({ message: "Quantity must be at least 5" });
    }

    if(description.length < 10){
        return res.status(400).json({ message: "Description must be at least 10 characters long" });
    }

    next();
}