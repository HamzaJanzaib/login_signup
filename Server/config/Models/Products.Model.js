const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    image: Buffer,
    Title:
    {
        type: String,
        required: true
    },
    Author:
    {
        type: String,
        required: true
    },
    specialPrice: {
        type: Number,
        required: true,
        min: 0
    },
    regularPrice: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Romance", "litrature", "manga", "self-help", "computer-Technology", "history", " socail-science", "science-fiction"]
    },
    quantity: {
        type: Number,
        default: 0,
    },  
    rating: { type: Number, min: 0, max: 5, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    discount: {
        type: Number,
        default: 0
    },
    brand: String,
    cover: [{ type: String, default: "hardcover" }, { type: String, default: "paperback" }, { type: String, default: "ebook" }],
    Weight: String,
    Width: String,
    Length: String,
    Height: String,
    shipping: String,
    returns: String,
    availability: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
