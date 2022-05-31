import React from 'react'
import AddToDOForm from './AddToDOForm'
import NavTodo from './NavTodo'

function AddToDo(props) {
  return (
    <section className='add-to-do'>
      <NavTodo closeTodo={props.toggleTodo} />
      {/* <NavTodo closeTodo={props.toggleTodo} submitForm={submitForm}/> */}
      <AddToDOForm closeTodo={props.toggleTodo} />
  </section>
  )
}

export default AddToDo