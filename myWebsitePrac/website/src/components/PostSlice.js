import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: [
    {content:"Hi"},
  ],
  reducers: {
    getPost: (state, action) => {
      state.push(action.payload)
    },
    
  }
})

export const { getPost } = postSlice.actions

export const selectPost = state => state.post.value //this can be omitted. 

export default postSlice.reducer