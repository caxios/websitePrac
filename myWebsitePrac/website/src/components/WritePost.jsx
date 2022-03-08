import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import PostBoard from './PostBoard';
import { useSelector, useDispatch } from 'react-redux'
import {
  setPost,
  selectPost,
} from './PostSlice'

const Container = styled.div`
    padding-top: 100px;
`

const WritePost = () => {
    var initLen = 990
    //const post = useSelector(selectPost)
    const dispatch = useDispatch()
    //const posts = useSelector(state => state.posts)

    const [textLen, setTextLen] = useState(initLen)
    var [postContent, setPostContent] = useState()
    var [id, setId] = useState(0)

    const savePostClicked = () => {
        setId(id=id+1)
        dispatch(setPost({
            id:id,
            content:postContent
        }))
    }

    return(
    <Stack spacing={2} direction="column">
        <Box
        component="form"
        sx={{
            width: 800,
            height: 300,
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField
        id="filled-textarea"
        label={"Left text : " + textLen}
        placeholder="Write Post"
        style = {{width: 800}}
        inputProps={{ maxLength: initLen }}
        multiline
        variant="outlined"
        onChange={(e)=>{
            var currentTextlength = e.target.value.length
            setTextLen(initLen-currentTextlength)
            //dispatch(getPost)(e.target.value)
            setPostContent(e.target.value)
        }}
        />
        </Box>
        <Button variant="text" type="submit" onClick={savePostClicked}>
                Submit
        </Button>
        {/* <Button variant="text" type="submit" onClick={()=>console.log(postContent)}>
                Log
        </Button>
        <Button variant="text" type="submit" onClick={()=>console.log(posts)}>
                Show Redux data
        </Button> */}
        <Container>
            <PostBoard/>
        </Container>
    </Stack>
    )
  }
  
export default WritePost;