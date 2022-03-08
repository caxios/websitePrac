import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
`
const ListContainer = styled.ul`
`
const PostList = styled.li`
    padding-top: 15px;
`   
const Title = styled.a``

const BestPost = () => {
    return (
        <Container>
            <h1>Trending Posts</h1>
            <ListContainer>
                <PostList><Title href='#'>인기게시글1</Title></PostList>
                <PostList><Title href='#'>인기게시글2</Title></PostList>
                <PostList><Title href='#'>인기게시글3</Title></PostList>
            </ListContainer>
        </Container>
    );
  };
  
  export default BestPost;