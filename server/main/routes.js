const express = require('express');
const router = express.Router();

const auth = require('./utils/auth');
const users = require('./controllers/users');

router.get('/', (req, res) => res.status(200).json('Server is running'));

// router.use(auth);
router.get('/api/users', users.getAllUsers);

module.exports = router;
