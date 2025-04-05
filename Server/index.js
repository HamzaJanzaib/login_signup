const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./config/connect-mongodb.js');
const userRoutes = require('./Routes/UserRouter.js');
const cors = require("cors");


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

app.use('/users', userRoutes);

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

