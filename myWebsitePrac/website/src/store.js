import { configureStore } from '@reduxjs/toolkit'
import postReducer from './components/PostSlice'

export default configureStore({
  reducer: {
    posts: postReducer
  }
})