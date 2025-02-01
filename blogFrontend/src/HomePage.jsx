import React, { useState } from 'react'
import Navabar from './Navabar'
import BlogContainer from './BlogContainer'
import './HomePage.css'
import CreateBlogPost from './CreateBlogPost'

const HomePage = () => {

  const[click,setClick] = useState(false);

  const formHandle = () => {
      setClick(!click);
  }


  return (
    <div>
        <Navabar formHandle={formHandle}/>
        <div id='home-page'>
            <BlogContainer/>
            <CreateBlogPost click={click} setClick={setClick}/>
        </div>
    </div>
  )
}

export default HomePage