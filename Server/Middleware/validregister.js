module.exports.validregister = (req, res, next) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { firstname, lastname, email, password, age, phone, gender } = req.body;

    if (!firstname || !lastname || !email || !password || !age || !phone || !gender) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    if (firstname.length < 4 || lastname.length < 4) {
        return res.status(400).json({ message: "First name and last name must be at least 4 characters" });
    }

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length <= 5) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    if (age < 18) {
        return res.status(400).json({ message: "Age must be at least 18" });
    }

    if (phone.length < 10) {
        return res.status(400).json({ message: "Phone number must be at least 10 digits" });
    }

    next();
};

module.exports.validlogin = (req, res, next) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    next();
};