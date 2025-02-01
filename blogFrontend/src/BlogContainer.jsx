import React, { useEffect, useState } from 'react'
import './BlogContainer.css'

const BlogContainer = () => {

  const[data,setData] = useState([]);

  function apiHandling(){
    fetch("http://localhost:9000/api/v1/posts")
    .then(data => data.json())
    .then(res=>setData(res));
  }
  useEffect(()=>{
    apiHandling();
  },[data])


  return (
    <>
    {
      data.map((e)=>(
      <div id="blog-container" key={e.id}>
        <div id="blog-img-cont">
          <img src="src\assets\Kylian-Mbappe-PSG-vs-Bordeaux-Ligue-1-2020.jpg" alt="Example Image"></img>
        </div>
        <div id="blog-text">
          <h1>{e.title}</h1>
          <p>{e.content}</p>
          <span><h6>{e.createdAt}</h6></span>
        </div>
      </div>
      ))
    }
    </>
    
  )
}

export default BlogContainer