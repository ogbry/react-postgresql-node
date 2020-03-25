const jwt = require("jsonwebtoken");

const post = async (req, res) => {
  const db = req.app.get("db");
  const { text, date_created, user_id } = req.body;
  db.posts
    .insert({
      text,
      date_created,
      user_id
    })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};
const getPost = (req, res) => {
  console.log('test')
  const db = req.app.get("db");
  db.query(`SELECT * from posts join users on posts.user_id = users.id`)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
};
module.exports = { post, getPost };
