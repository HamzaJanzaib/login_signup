const express = require('express');
const router = express.Router();
const register = require('../controllers/register');
const validregister = require('../Middleware/validregister');

router.get("/", (req, res) => {
    res.send("Hello, World!");
});

router.post("/register", validregister, register)


module.exports = router;
