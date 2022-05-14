import React from 'react'
import { Link } from 'react-router-dom'

function TodoItem(props) {
    const data =props.todo
  return (
    <div className='todos__todo'>
        <h2 className='todos__todo-title'>
            {data.title}
        </h2>
        <span className='todos__todo-time'>
            {data.createdAt}
        </span>
        <p className='todos__todo-content'>
            {data.description}
        </p>
        <div className='todos__todo-controls'>
            <button onClick={props.toggleModal} className='todos__todo-control'>
                View
            </button>
            <Link to='/' className='todos__todo-control'>
            Edit
            </Link>
            <Link to='/' className='todos__todo-control'>
            Delete
            </Link>
        </div>
    </div>
    )
}

export default TodoItem