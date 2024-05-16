const {db} = require('../config/db');

const getAllUsers = async () => {
    const query = 'SELECT * FROM users';
    const {rows} = await db.query(query);
    return rows
};

module.exports = { getAllUsers };