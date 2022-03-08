import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import PostBoard from '../components/PostBoard'
import SideMenu from '../components/SideMenu'
import BestPost from '../components/BestPost'
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'
const BodyContainer = styled.div`
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
`

const Homepage = () => {

    const posts = useSelector(state=>state.posts)

    return (
    <div>
        <Navbar/>
        <BodyContainer>
            <SideMenu/>
            <PostBoard/>
            <BestPost/>
        </BodyContainer>
        {/* <Button variant="text" type="submit" onClick={()=>console.log(posts)}>
                Show Redux data
        </Button> */}
    </div>
    );
  };
  
  export default Homepage;