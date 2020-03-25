import React from 'react'
import  { Avatar, TextField, Badge, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import './post.css'

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

const Posts = (props) => {
    const classes = useStyles(props);
    return (
        <React.Fragment>
             <div style={{padding: 10}}>
                <TextField
                label="Search"
                placeholder="Look for a specific post..."
                fullWidth
                />
             </div>
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
                                <Tooltip title="Edit" placement="top" arrow>
                                    <IconButton>
                                        <EditIcon style={{color: '#FFF', cursor: 'pointer'}} />
                                    </IconButton>
                                </Tooltip> 
                                <Tooltip title="Delete" placement="top" arrow>
                                    <IconButton>
                                        <DeleteIcon style={{color: '#FFF', cursor: 'pointer'}} />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        
                        <div className="post-container">
                            <span>
                                {item.content}
                            </span>
                            {/* Condition here if image == !null */}
                            
                            {
                                item.imgContent ? 
                                <img style={{padding: 20}} src={item.imgContent} alt="" />
                                :
                                null
                            }
                            
                        </div>
            
                        <div style={{padding: 20}}>
                            <IconButton>
                            <Badge badgeContent={item.likes} color="secondary">
                                <FavoriteIcon style={{color: '#DC2A4F'}} />
                            </Badge>
                            </IconButton>
                            <IconButton>
                            <Badge badgeContent={item.comments} color="secondary">
                                <CommentIcon style={{color: 'blue'}} />
                            </Badge>
                            </IconButton>
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

export default Posts