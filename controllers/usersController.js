const NewUser = require("../models/NewUser");

const newusercontroller = {};

newusercontroller.register = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        const userReg = new NewUser({ name, email, password }); // Create a new instance of NewUser
        await userReg.save();
        console.log('User saved:', userReg);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

module.exports = newusercontroller;
