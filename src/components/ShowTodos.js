import React, { useEffect, useState } from 'react'
import AddToDoButton from './AddToDoButton'
import DescriptionModal from './DescriptionModal'
import TodoItem from './TodoItem'

function ShowTodos(props) {
  const[showModal,setShowModal]=useState(false)
  const [todos,setTodos]=useState(null)
  const toggleModal= ()=>{
    setShowModal((prevState)=>{
      return !prevState
    })
  }
  useEffect(()=>{
    getTodos()
  },[])
  const getTodos=async()=>{
      let todos= await fetch('http://localhost:8000/todos').then(res=>res.json()).then(data=>data).catch(err=>err.message)
      setTodos(todos)
      console.log(todos)
      return todos
  }

  return (
    <section className='todos'>
      <div className='todos__container'>
        {todos && todos.map(todo=>(
          <>
            <TodoItem toggleModal={toggleModal} todo={todo} key={`todo${todo.id}`}/>
            {showModal&& <DescriptionModal  todo={todo} toggleModal={toggleModal} key={`modal${todo.id}`}/>}
          </>
          
        ))}

      </div>
      <AddToDoButton showTodo={props.toggleTodo} />
      {/* {showModal&& <DescriptionModal toggleModal={toggleModal}/>} */}
    </section>

  )
}

export default ShowTodos