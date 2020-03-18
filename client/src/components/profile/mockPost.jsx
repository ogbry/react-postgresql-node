import React from 'react'
import  { Avatar, TextField, Badge } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import { makeStyles } from '@material-ui/core/styles';
import './profile.css'

const mockData = [
    {
        id: 1,
        name: 'Bryan',
        avatar: 'https://lh3.googleusercontent.com/-XyiHdSaYg4U/XYiP9IQ7C_I/AAAAAAAAAEk/sdpDMcxVWJEnQy7dvkjXX3YrQXaIpiORACEwYBhgL/w278-h280-p/MilesMorales2.jpeg',
        email: 'bry@gmail.com',
        content: 'My post about something...',
        imgContent: null,
        likes: 6,
        comments: 9,
        datePosted: 'Mar 18 2020 16:42:01'
    },
    {
        id: 1,
        name: 'Bryan',
        avatar: 'https://lh3.googleusercontent.com/-XyiHdSaYg4U/XYiP9IQ7C_I/AAAAAAAAAEk/sdpDMcxVWJEnQy7dvkjXX3YrQXaIpiORACEwYBhgL/w278-h280-p/MilesMorales2.jpeg',
        email: 'bry@gmail.com',
        content: 'My post about something...',
        imgContent: 'https://lh3.googleusercontent.com/-XyiHdSaYg4U/XYiP9IQ7C_I/AAAAAAAAAEk/sdpDMcxVWJEnQy7dvkjXX3YrQXaIpiORACEwYBhgL/w278-h280-p/MilesMorales2.jpeg',
        likes: 132,
        comments: 65,
        datePosted: 'Mar 18 2020 16:42:01'
    }
]

const useStyles = makeStyles({
    multilineColor: {
        color: '#FFF',
        borderColor: '#FFF !important'
    },
  });

const MockPost = (props) => {
    // console.log(new Date());
    const classes = useStyles(props);
    return (
        <React.Fragment>
            {
                mockData.map((item, index) => (
                    <div key={index}>
                        <div className="avatar-container">
                            <div className="avatar-wrapper">
                                <Avatar src={item.avatar} style={{marginRight: 5}} />
                                <div>
                                    <span className="name">{item.name}</span>
                                    <span style={{color: '#CCC', fontSize: '13px'}}><i>{item.datePosted}</i></span>
                                </div>
                            </div>
                            <div>
                                <DeleteIcon style={{color: '#FFF'}} />
                            </div>
                        </div>
                        
                        <div className="post-container">
                            <span>
                                {item.content}
                            </span>
                            {/* Condition here if image == !null */}
                            
                            <img src={item.imgContent} alt="" />
                            
                        </div>
            
                        <div style={{padding: 20}}>
                            <Badge style={{marginRight: 15}} badgeContent={item.likes} color="secondary">
                                <FavoriteIcon style={{color: '#DC2A4F'}} />
                            </Badge>
                            <Badge badgeContent={item.comments} color="secondary">
                                <CommentIcon style={{color: 'blue'}} />
                            </Badge>
                        </div>
            
                        <div className="comment-container">
                            <Avatar src={item.avatar} style={{marginRight: 15}} />
                            <TextField className={classes.text}
                                InputProps={{
                                    className: classes.multilineColor
                                }}
                                fullWidth
                                placeholder="Add a comment..."
                            />
                        </div>
                    </div>
                    
                ))
            }
            
        </React.Fragment>
    )
}

export default MockPost