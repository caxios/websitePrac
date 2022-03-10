import React from 'react';
import styled from 'styled-components';
import {
    Link
  } from "react-router-dom";
import { useSelector } from 'react-redux';

const Container = styled.div`
    width: 300px;
`
const ListContainer = styled.ul`
`
const PostList = styled.li`
    padding-top: 15px;
`   
const AddPost = styled.a` 
    padding-left: 10px;
    padding-top: 40px;
`
const TopLine = styled.div`
    display: flex;
`

const PostBoard = () => {
    const posts = useSelector(state => state.posts)
    console.log(posts)
    return (
        <Container>
            <TopLine>
                <h1>Board</h1>     
                <AddPost href='#'>more</AddPost>
            </TopLine>
            <ListContainer>
                {posts?.map(post=><PostList><Link to={`post/${post.id}`}>{post.content.slice(0, 20)}</Link></PostList>)}
            </ListContainer>
        </Container>
    );
  };
  
  export default PostBoard;