const AdminModel = require("../config/Models/AdminModel");
const { hashedPassword, comparePassword } = require("../Services/BcryptServices")
const { CreateToken } = require("../Services/JwtServices")

module.exports.register = async (req, res) => {
    try {
        const { firstname, lastname, email, password, phone } = req.body;
        const existingAdmin = await AdminModel.findOne({});
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        const hash = await hashedPassword(password);
        const newAdmin = await AdminModel.create({
            firstname,
            lastname,
            email,
            password: hash,
            phone,
            role: "admin"
        });

        const token = await CreateToken(newAdmin);

        res.status(201).json({ message: "Admin created successfully", token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await AdminModel.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const isPasswordValid = await comparePassword(password, admin.password);
        console.log(isPasswordValid);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = await CreateToken(admin);
        res.status(200).json({ message: "Login successful", token, role: admin.role });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

