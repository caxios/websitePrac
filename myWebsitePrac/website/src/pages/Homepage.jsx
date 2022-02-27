import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import PostBoard from '../components/PostBoard'
import SideMenu from '../components/SideMenu'
import BestPost from '../components/BestPost'

import {BrowserRouter as Router} from "react-router-dom"

const BodyContainer = styled.div`
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
`

const Homepage = () => {
    return (
    <div>
        <Navbar/>
        <BodyContainer>
            <Router>
                <SideMenu/>

            </Router>
            <PostBoard/>
            <BestPost/>
        </BodyContainer>
    </div>
    );
  };
  
  export default Homepage;