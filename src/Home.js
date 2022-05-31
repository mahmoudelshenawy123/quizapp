import React, { useState } from 'react'
import Nav from './components/Nav.js'
import SideNavBar from './components/SideNavBar.js'
import ShowTodos from './components/ShowTodos.js'
import './stylesheets/home.css'
import AddToDo from './components/AddToDo.js'
import UploadImage from './components/UploadImage.js'
import UploadImages from './components/UploadImages.js'

function Home() {
  const [showToDo,setShowToDo] =useState(false)
  const toggleTodo=()=>{
    setShowToDo((prevState)=>{{return !prevState}})
  }

  return (
    <>
      {!showToDo &&
      <>
        <Nav/>
        <div className='main-content__container'>
          <SideNavBar/>
          {/* <ShowTodos toggleTodo={toggleTodo}></ShowTodos> */}
          {/* <UploadImage/> */}
          <UploadImages/>
        </div>
      </>
      }
      {showToDo &&<AddToDo toggleTodo={toggleTodo}/>}
    </>
  )
}

export default Home