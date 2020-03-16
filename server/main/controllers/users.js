// const argon2 = require('argon2');
// const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
	const db = req.app.get('db');
	try {
		const users = await db.users.find();
		res.status(200).json(users);
	} catch (error) {
		console.error(err);
		res.status(500).end();
	}
};

module.exports = { getAllUsers };
