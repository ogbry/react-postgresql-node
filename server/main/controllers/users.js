// const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

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

const login = async (req, res) => {
	const db = req.app.get('db');
	const { id, firstname, lastname, email, avatar } = req.body;

	const exist = await db.users.findOne({ email });

	if (exist) {
		const token = jwt.sign(exist, process.env.SECRET_KEY);
		res.status(200).json(token);
	} else {
		db.users
			.insert({
				id,
				firstname,
				lastname,
				email,
				avatar
			})
			.then(user => {
				const token = jwt.sign(user, process.env.SECRET_KEY);
				res.status(201).json(token);
			});
	}
};
module.exports = { getAllUsers, login };
