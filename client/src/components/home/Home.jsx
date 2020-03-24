import React from 'react'
import Header from '../common-components/Header/Header'
import Post from '../common-components/Post/Post'
import "./home.css";
const Home = ({history}) => {

    return (
        <div className="home">
            <Header history={history}/>
            <br/>
            <Post history={history}/>
        </div>
    )
}

export default Home