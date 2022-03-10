import { useSelector } from 'react-redux';
import React from 'react'
import Modal from 'react-modal'

const SinglePost = (props)=>{
    
    const posts = useSelector(state=>state.posts)

    return(
        <div>
            {posts?.map(post=>{
               if(post.id==props.id){
                <Modal>{posts.content}</Modal>
               }else{
                   <h1>No matched post exists!</h1>
               }
            })}
        </div>
    )

  }

export default SinglePost;