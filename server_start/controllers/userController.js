const UserModel = require('../models/userModel');

async function getAllUsers(req, res) {
    try {
        const users = await UserModel.getAllUsers();
        res.send(users);
    } catch (error) {
        res.status(500).send
    }
}

module.exports = { getAllUsers };