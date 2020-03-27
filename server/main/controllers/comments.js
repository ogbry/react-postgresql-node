const getComments = (req, res) => {
    const db = req.app.get("db");
    db.query(`SELECT * from comments`)
        .then(item => {
        res.status(201).json(item);
        })
        .catch(err => {
        console.error(err);
        res.status(500).end();
        });
}

const addComment = (req, res) => {
    const db = req.app.get("db")
    const {  user_id, post_id, comment } = req.body;
    db.comments
        .save({
            user_id, post_id, comment
        })
        .then(comments => res.status(201).json(comments))
}

const editComment = (req, res) => {
    const db = req.app.get('db');
    const { comment } = req.body;
  
    db.comments
      .update(req.params.id, {comment: comment})
      .then(item => res.status(200).json(item))
}

module.exports = { getComments, addComment, editComment }