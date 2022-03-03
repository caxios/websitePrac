import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const WritePost = () => {
    var initLen = 990
    // const handleLen = (...args)=>{
    //     return args
    // }
    const [textLen, setTextLen] = useState(initLen)
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
              //console.log(initLen - currentTextlength)
              //handleLen(initLen - currentTextlength)
          }}
        />
        </Box>
        <Button variant="text">Submit</Button>
    </Stack>
    )
  }
  
  export default WritePost;