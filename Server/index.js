const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./config/connect-mongodb.js');
const userRoutes = require('./Routes/UserRouter.js');
const cors = require("cors");
const path = require('path');
const ProductsRouter = require('./Routes/Admin/ProductsRouter.js');



dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'Client', 'dist')));

app.use('/users', userRoutes);
app.use('/products', ProductsRouter);

const startServer = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Error starting server:", error.message);
    }
};

startServer();

