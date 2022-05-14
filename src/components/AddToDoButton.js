import React from 'react'
import {ReactComponent as PlusIcon} from '../assets/imgs/plusIcon.svg'

function AddToDoButton(props) {
  const toggleTodo=()=>[
    props.showTodo()
  ]
  return (
    <button className='todo__add-todo' onClick={toggleTodo}>
        <PlusIcon/>
    </button>
  )
}

export default AddToDoButton