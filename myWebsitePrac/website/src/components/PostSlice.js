import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: [

  ],

  reducers: {
    setPost: (state, action) => {
      state.push(action.payload)
    },
    
  }
})

export const { setPost } = postSlice.actions

//export const selectPost = state => state.posts.value this can be omitted. 

export default postSlice.reducer