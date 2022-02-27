import React, {useState} from 'react';
import styled from 'styled-components';
import pushData from '../dummydata'
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//   } from "react-router-dom";

const Container = styled.div`
    width: 300px;
`
const ListContainer = styled.ul`
`
const PostList = styled.li`
    padding-top: 15px;
`   
const Title = styled.a`
`
const AddPost = styled.a` 
    padding-left: 10px;
    padding-top: 40px;
`
const TopLine = styled.div`
    display: flex;
`

const PostBoard = () => {
    let datas = pushData()

    console.log("one");
    //게시판 더미데이터를 가져와서 하나씩 보여주게 하고 싶다. 그런데 오브젝트는 못 받는 것 같다. 그냥 안 하련다.
    return (
        <Container>
            <TopLine>
                <h1>Board</h1>     
                <AddPost href='#'>more</AddPost>
            </TopLine>
            {/* <ListContainer> 
                <PostList><Title href="#">{props.post1.title}</Title></PostList>
            </ListContainer> */}
            <ListContainer>
                {datas.map(data=><PostList><Title href="#">{data.title}</Title></PostList>)}
                {/* <PostList><Title href="#">1</Title></PostList>
                <PostList><Title href="#">2</Title></PostList>
                <PostList><Title href="#">3</Title></PostList> */}
                {/* <PostList><Title href="#">{props.posts}{console.log("one")}</Title></PostList> */}
            </ListContainer>
            {/* <Router>
                <Routes>
                    <ListContainer>
                        <Route path="/firstpost">
                            <PostList><Title>1</Title></PostList>
                        </Route>
                        <Route path="/secondpost">
                            <PostList><Title>2</Title></PostList>
                        </Route>
                        <Route path="/thirdpost">
                            <PostList><Title>3</Title></PostList>
                        </Route>
                    </ListContainer>
                </Routes>
            </Router> */}
        </Container>
    );
  };
  
  export default PostBoard;