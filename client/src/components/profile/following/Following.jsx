import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Avatar, Button, Divider } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
// import './followers.css'

const following = [
    {
        id: 2,
        name: 'Clark Amor',
        avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gjbk1se9gsIgDvd94T-EKGKru23rzkFjGFw8Cdl=s100-c',
        email: 'clark@gmail.com',
        followed: true
    },
    {
        id: 1,
        name: 'Joven Bandagosa',
        avatar: 'https:////lh3.googleusercontent.com/a-/AOh14GgnRVl2xYh6jHndrORkrdzso_4mcgv50CZNDeD7=s32-c',
        email: 'jov@gmail.com',
        followed: false
    },
    {
        id: 2,
        name: 'Jude Agagad',
        avatar: 'https:////lh3.googleusercontent.com/a-/AOh14GiO8eBuMUWVr1wMixAXg377Qvf5ECnwETyQSRZk9A=s32-c',
        email: 'jude@gmail.com',
        followed: true
    },
    {
        id: 2,
        name: 'Clark Amor',
        avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gjbk1se9gsIgDvd94T-EKGKru23rzkFjGFw8Cdl=s100-c',
        email: 'clark@gmail.com',
        followed: true
    },
    {
        id: 1,
        name: 'Joven Bandagosa',
        avatar: 'https:////lh3.googleusercontent.com/a-/AOh14GgnRVl2xYh6jHndrORkrdzso_4mcgv50CZNDeD7=s32-c',
        email: 'jov@gmail.com',
        followed: false
    },
    {
        id: 1,
        name: 'Joven Bandagosa',
        avatar: 'https:////lh3.googleusercontent.com/a-/AOh14GgnRVl2xYh6jHndrORkrdzso_4mcgv50CZNDeD7=s32-c',
        email: 'jov@gmail.com',
        followed: false
    },
    {
        id: 2,
        name: 'Clark Amor',
        avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gjbk1se9gsIgDvd94T-EKGKru23rzkFjGFw8Cdl=s100-c',
        email: 'clark@gmail.com',
        followed: true
    },
    {
        id: 1,
        name: 'Joven Bandagosa',
        avatar: 'https:////lh3.googleusercontent.com/a-/AOh14GgnRVl2xYh6jHndrORkrdzso_4mcgv50CZNDeD7=s32-c',
        email: 'jov@gmail.com',
        followed: false
    },
    {
        id: 2,
        name: 'Clark Amor',
        avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gjbk1se9gsIgDvd94T-EKGKru23rzkFjGFw8Cdl=s100-c',
        email: 'clark@gmail.com',
        followed: true
    },
]

const Following = () => {
    
    return (
        <div>
            {
                following.filter(follow => {
                    return follow.followed === true
                }).map((item, index) => 
                <div key={index}>
                    <List className="list-container">
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar src={item.avatar} alt="" />
                            </ListItemAvatar>
                            <ListItemText primary={item.name} secondary={item.email} />
                            <ListItemSecondaryAction>
                                <Button
                                style={{color: '#AAA', border: 'solid 1px'}}
                                startIcon={<PersonAddDisabledIcon />}
                                >
                                    Unfollow
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                    <Divider style={{width: '100%'}} />
                </div>
                )
            }
        </div>
    )
}

export default Following