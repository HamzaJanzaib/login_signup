const usermodel = require("../config/Models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = async (req, res) => {
    try {
        const { firstname, lastname, email, password, age, phone, gender } = req.body;

        const existingUser = await usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        await usermodel.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            age,
            phone,
            gender
        });

        res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = register;
