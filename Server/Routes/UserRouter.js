const express = require('express');
const router = express.Router();
const { register , login} = require('../controllers/auth');
const { validregister, validlogin } = require('../Middleware/validregister');

router.get("/", (req, res) => {
    res.send("Hello, World!");
});

router.post("/register", validregister, register)
router.post("/login", validlogin, login)


module.exports = router;
