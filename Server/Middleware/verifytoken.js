const { verifyToken } = require("../Services/JwtServices");

module.exports.verifyTokenAdmin = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1] || req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = await verifyToken(token);
        if (decoded.role !== "admin") {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports.verifyTokenUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1] || req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = await verifyToken(token);
        if (decoded.role !== "user") {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
