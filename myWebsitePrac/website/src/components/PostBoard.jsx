import React, {useState} from 'react';
import styled from 'styled-components';
import pushData from '../dummydata'
import {
    Link
  } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectPost } from './PostSlice';

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
    //let datas = pushData()
    const posts = useSelector(selectPost)
    return (
        <Container>
            <TopLine>
                <h1>Board</h1>     
                <AddPost href='#'>more</AddPost>
            </TopLine>
            <ListContainer>
                {posts.map(post=><PostList><Title href="#">{post}</Title></PostList>)}
            </ListContainer>
        </Container>
    );
  };
  
  export default PostBoard;