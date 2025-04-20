const AdminModel = require("../config/Models/AdminModel");

module.exports.AdminProfile = async (req, res) => {
    try {
        const admin = req.admin;
        const foundAdmin = await AdminModel.findById(admin.id);
        if (!foundAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.json(foundAdmin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}