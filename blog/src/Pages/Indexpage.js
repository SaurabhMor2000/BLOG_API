import React, { useEffect, useState } from 'react'
import Post from '../Post'

const Indexpage = () => {
  const [posts,setPosts]= useState([]);
  useEffect(() =>{
  fetch('https://codapi.onrender.com/post').then(response=>{
    response.json().then(posts =>{
      // console.log(posts);
      setPosts(posts);
    })

  })
  },[]);
  return (
    <>
   {posts.length > 0 && posts.map(post =>(
  <Post {...post}/>)
  )}
    </>
  )
}

export default Indexpage;
