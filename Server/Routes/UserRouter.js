const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth');
const { validregister, validlogin } = require('../Middleware/validregister');

router.get("/register", (req, res) => {
    res.send("register");
});
router.get("/login", (req, res) => {
    res.send("git token and send");
});

router.post("/register", validregister, register)
router.post("/login", validlogin, login)


module.exports = router;
