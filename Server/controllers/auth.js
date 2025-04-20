const usermodel = require("../config/Models/user.model");
const { hashedPassword, comparePassword } = require("../Services/BcryptServices");
const { CreateToken, refreshToken } = require("../Services/JwtServices");

module.exports.register = async (req, res) => {
    try {
        const { firstname, lastname, email, password, age, phone, gender } = req.body;

        const existingUser = await usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hash = await hashedPassword(password);
        const newUser = await usermodel.create({
            firstname,
            lastname,
            email,
            password: hash,
            age,
            phone,
            gender,
            role: "user"
        });

        const token = await CreateToken(newUser);
        const refreshTokenValue = await refreshToken(newUser);

        res.setHeader('Authorization', `Bearer ${token}`);
        res.status(201).json({ 
            message: "User created successfully", 
            token,
            refreshToken: refreshTokenValue
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const isPasswordValid = await comparePassword(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = await CreateToken(user);
        const refreshTokenValue = await refreshToken(user);

        res.setHeader('Authorization', `Bearer ${token}`);
        res.status(200).json({ 
            message: "Login successful", 
            token,
            refreshToken: refreshTokenValue,
            role: user.role
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

