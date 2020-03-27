const likePost = (req, res) => {
    const db = req.app.get("db")
    const { user_id, post_id } = req.body;
    
    db.query(`select * from likes where user_id = '${user_id}' and post_id = ${post_id};`)
    .then(findLike => {
        if(findLike.length > 0){
            db.query(`delete from likes where user_id = '${user_id}' and post_id = ${post_id};`)
            .then(x => {
                res.status(201).json(x)
            })
        }
        else{
            db.likes
            .save({user_id, post_id})
            .then(like => res.status(201).json(like))
        }
    })
}

module.exports = { likePost }