import React from 'react'
import AddToDOForm from './AddToDOForm'
import NavTodo from './NavTodo'

function AddToDo(props) {
  return (
    <section className='add-to-do'>
      <NavTodo closeTodo={props.toggleTodo} />
      <AddToDOForm />
  </section>
  )
}

export default AddToDo