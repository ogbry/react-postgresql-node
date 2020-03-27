const express = require("express");
const router = express.Router();

const auth = require("./utils/auth");
const users = require("./controllers/users");
const posts = require("./controllers/posts");
const comments = require("./controllers/comments");
const likes = require("./controllers/likes");
router.get("/", (req, res) => res.status(200).json("Server is running"));

// router.use(auth);
router.get("/api/users", users.getAllUsers);
router.post("/api/login", users.login);
router.get("/api/getPosts", posts.getPost);

//Comments
router.get("/api/comments", comments.getComments)
router.post("/api/addcomment", comments.addComment)
router.patch("/api/editcomment/:id", comments.editComment)

//Likes
router.post("/api/like", likes.likePost)

router.use(auth);
router.post("/api/posts", posts.post);
module.exports = router;
