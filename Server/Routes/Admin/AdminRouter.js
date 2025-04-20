const express = require('express');
const router = express.Router();
const { login, register } = require('../../controllers/AdminAuth');
const { validloginAdmin, validregisterAdmin } = require('../../Middleware/validregisterAdmin');
const ProductsRouter = require('./ProductsRouter');
const { verifyTokenAdmin } = require('../../Middleware/verifytoken');
const { AdminProfile } = require('../../controllers/Profile');

router.post("/login", validloginAdmin, login);
router.post("/register", validregisterAdmin, register);

router.use("/products", verifyTokenAdmin, ProductsRouter);
router.use("/profile", verifyTokenAdmin, AdminProfile);

module.exports = router;
