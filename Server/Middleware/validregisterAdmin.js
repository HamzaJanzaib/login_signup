module.exports.validregisterAdmin = (req, res, next) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { firstname, lastname, email, password, phone } = req.body;

    if (!firstname || !lastname || !email || !password || !phone) {
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

    if (!/^\d{10}$/.test(phone)) {
        return res.status(400).json({ message: "Phone number must be 10 digits" });
    }

    next();
};

module.exports.validloginAdmin = (req, res, next) => {
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