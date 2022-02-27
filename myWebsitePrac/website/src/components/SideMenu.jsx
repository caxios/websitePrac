import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Container = styled.div`
width: 300px;
`
const ListContainer = styled.ul``
const PostList = styled.li`
    padding-top: 15px;
`

const SideMenu = () => {
    return (
        <Container>
            <h1>Menu</h1>
            <ListContainer>
                <PostList><Link to="/">Homepage</Link></PostList>
                <PostList><Link to="writepost">Write Post</Link></PostList>
            </ListContainer>
        </Container>
    );
  };
  
  export default SideMenu;