import React from 'react'
import Header from "../common-components/Header/Header"
import './profile.css'
import { Avatar } from '@material-ui/core'
import ProfileTab from './ProfileTabs'

const RenderProfile = () => {
 
    return (
        <div className="paper">
            <div className="one justify-center flex-column align-center">
            <Avatar className="profile-logo" src="https://lh3.googleusercontent.com/-XyiHdSaYg4U/XYiP9IQ7C_I/AAAAAAAAAEk/sdpDMcxVWJEnQy7dvkjXX3YrQXaIpiORACEwYBhgL/w278-h280-p/MilesMorales2.jpeg"/>
            <span className="profile-name">Bryan</span>
            <span className="profile-email">bryan.alfuente@boom.camp</span>
            </div>
            <hr style={{border: 'solid 1px #4E1E61'}}/>
            <div className="two">
                <ProfileTab/>
            </div>
            
        </div>
    )
}

const Profile = ({history}) => {

    return (
        <div>
            <Header history={history} />
            
            <div className="profile-wrapper justify-center">
                <RenderProfile />
            </div>

        </div>
    )
}

export default Profile