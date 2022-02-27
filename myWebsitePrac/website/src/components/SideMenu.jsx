import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Homepage from '../pages/Homepage'
import Writepostpage from '../pages/Writepostpage'

const Container = styled.div`
width: 300px;
`
const ListContainer = styled.ul``
const PostList = styled.li`
    padding-top: 15px;
`   
const Title = styled.a``


//hompage와 writepost메뉴를 사이드메뉴에서 누르면 해당 페이지로 이동할 수 있는 기능을 만들 것이다.
const SideMenu = () => {
    return (
        <Container>
            <h1>Menu</h1>
            <ListContainer>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                </Routes>
            </ListContainer>
            {/* <Router>
                <Routes>
                    <Route path="/firstpost" element={<Homepage/>}/>
                    <Route path="/secondpost"element={<Writepostpage/>}/>
                </Routes>
            </Router> */}
        </Container>
    );
  };
  
  export default SideMenu;