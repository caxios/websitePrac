import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import PostBoard from './PostBoard';

const Container = styled.div`
    padding-top: 100px;
`

const WritePost = () => {
    var initLen = 990
    const [textLen, setTextLen] = useState(initLen)
    const [postContent, setPostContent] = useState()

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
            setPostContent(e.target.value)
        }}
        />
        </Box>
        <Button variant="text" type="submit">
                Submit
        </Button>
        <Container>
            <PostBoard post={postContent}/>
        </Container>
    </Stack>
    )
  }
  
  export default WritePost;