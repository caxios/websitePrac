import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import PostBoard from './PostBoard';
import {useDispatch} from 'react-redux'
import {setPost} from './PostSlice'
import axios from 'axios'

const Container = styled.div`
    padding-top: 100px;
`

const WritePost = () => {
    var initLen = 990
    const dispatch = useDispatch()

    const [textLen, setTextLen] = useState(initLen)
    var [postContent, setPostContent] = useState()
    var [id, setId] = useState(0)
    var data = {
        id:id,
        postConent:postContent
    }
    const savePostClicked = () => {
        setId(id=id+1)
        dispatch(setPost({
            id:id,
            content:postContent
        }))
        axios.post('mongodb+srv://heenbee:<yena1234>@websiteprac.esozc.mongodb.net/websitePrac?retryWrites=true&w=majority', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

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
            setPostContent(e.target.value)
        }}
        />
        </Box>
        <Button variant="text" type="submit" onClick={savePostClicked}>
                Submit
        </Button>
        <Container>
            <PostBoard/>
        </Container>
    </Stack>
    )
  }
  
export default WritePost;