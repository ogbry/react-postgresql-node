const express = require("express");
const router = express.Router();

const auth = require("./utils/auth");
const users = require("./controllers/users");
const posts = require("./controllers/posts");
router.get("/", (req, res) => res.status(200).json("Server is running"));

// router.use(auth);
router.get("/api/users", users.getAllUsers);
router.post("/api/login", users.login);
router.get("/api/getPosts", posts.getPost);

router.use(auth);
router.post("/api/posts", posts.post);
module.exports = router;
