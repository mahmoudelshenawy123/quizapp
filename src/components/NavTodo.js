import React from 'react'
import {ReactComponent as CloseIcon} from '../assets/imgs/closeIcon.svg'
function NavTodo(props) {

  return (
    <nav className='navbar-todo'>
        <button className='navbar-todo__close' onClick={props.closeTodo}><CloseIcon/></button>
        <h2 className='navbar-todo__heading'>
            Create To Do Item
        </h2>
        <button type='submit' className='navbar-todo__Submit' onClick={submitForm}>Submit</button>
    </nav>
  )
}

export default NavTodo